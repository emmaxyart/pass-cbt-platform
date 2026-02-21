'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    User,
    Mail,
    Phone,
    Calendar,
    Award,
    BookOpen,
    CheckCircle,
    TrendingUp,
    Shield,
    CreditCard,
    Settings,
    ChevronRight,
    Camera,
    Loader2,
    Save
} from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { LoadingSpinner } from '@/components/loading-spinner'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const PremiumButton = dynamic(() => import('@/components/premium-button').then(mod => mod.PremiumButton), {
    ssr: false,
    loading: () => <div className="h-12 w-full bg-slate-800 animate-pulse rounded-2xl" />
})

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null)
    const [profile, setProfile] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Form states
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        username: ''
    })

    const supabase = createClient()

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                setIsLoading(false)
                return
            }
            setUser(user)

            // Fetch from profiles table
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single()

            if (profileData) {
                setProfile(profileData)
                setFormData({
                    first_name: profileData.first_name || user.user_metadata?.first_name || '',
                    last_name: profileData.last_name || user.user_metadata?.last_name || '',
                    phone: profileData.phone || user.user_metadata?.phone || '',
                    username: profileData.username || user.user_metadata?.username || ''
                })
            } else {
                // Fallback to metadata if profile doesn't exist yet
                setFormData({
                    first_name: user.user_metadata?.first_name || '',
                    last_name: user.user_metadata?.last_name || '',
                    phone: user.user_metadata?.phone || '',
                    username: user.user_metadata?.username || ''
                })
            }
            setIsLoading(false)
        }
        fetchUserData()
    }, [supabase])

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (file.size > 2 * 1024 * 1024) {
            toast.error('Image size must be less than 2MB')
            return
        }

        setIsUploading(true)
        try {
            const fileExt = file.name.split('.').pop()
            const fileName = `${user.id}-${Date.now()}.${fileExt}`

            // Upload the file to Supabase Storage root
            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: true
                })

            if (uploadError) {
                console.error('Supabase Upload Error:', uploadError)
                throw new Error(`Upload failed: ${uploadError.message}`)
            }

            // Get the public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(fileName)

            // 1. Update profiles table
            const { error: profileUpdateError } = await supabase
                .from('profiles')
                .update({ avatar_url: publicUrl })
                .eq('id', user.id)

            // 2. Update user metadata (as backup)
            const { error: authUpdateError } = await supabase.auth.updateUser({
                data: { avatar_url: publicUrl }
            })

            if (profileUpdateError) console.error('Profile update error:', profileUpdateError)
            if (authUpdateError) throw authUpdateError

            toast.success('Profile picture updated!')

            // Refresh local state
            setProfile({ ...profile, avatar_url: publicUrl })
            const { data: { user: updatedUser } } = await supabase.auth.getUser()
            setUser(updatedUser)
        } catch (error: any) {
            console.error('Full Error Object:', error)
            toast.error(error.message || 'Check your Supabase "avatars" bucket settings.')
        } finally {
            setIsUploading(false)
        }
    }

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsUpdating(true)
        try {
            // 1. Update profiles table
            const { error: profileError } = await supabase
                .from('profiles')
                .upsert({
                    id: user.id,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    phone: formData.phone,
                    username: formData.username,
                    updated_at: new Date().toISOString()
                })

            // 2. Update user metadata (as backup)
            const { error: authError } = await supabase.auth.updateUser({
                data: {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    phone: formData.phone,
                    username: formData.username
                }
            })

            if (profileError) throw profileError
            if (authError) throw authError

            toast.success('Profile updated successfully!')
            setIsEditModalOpen(false)

            // Refresh local state
            const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single()
            setProfile(profileData)

            const { data: { user: updatedUser } } = await supabase.auth.getUser()
            setUser(updatedUser)
        } catch (error: any) {
            toast.error(error.message || 'Error updating profile')
        } finally {
            setIsUpdating(false)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <LoadingSpinner />
            </div>
        )
    }

    // Derived values from Profile Table (Primary) or Metadata (Fallback)
    const firstName = profile?.first_name || user?.user_metadata?.first_name || 'SixthSense'
    const lastName = profile?.last_name || user?.user_metadata?.last_name || 'Student'
    const fullName = `${firstName} ${lastName}`
    const username = profile?.username || user?.user_metadata?.username || user?.email?.split('@')[0] || 'student'
    const email = user?.email || 'student@sixthsense.com'
    const phone = profile?.phone || user?.user_metadata?.phone || '+234 800 000 0000'
    const avatarUrl = profile?.avatar_url || user?.user_metadata?.avatar_url
    const joinedDate = user?.created_at
        ? new Date(user.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
        : 'February 2026'
    const isPremium = profile?.is_premium || user?.user_metadata?.is_premium || false

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                />

                {/* Profile Header Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative mb-10 overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100"
                >
                    {/* Background Banner */}
                    <div className="h-40 bg-gradient-to-r from-slate-900 via-slate-800 to-primary" />

                    <div className="px-5 sm:px-8 pb-8">
                        <div className="relative flex flex-col md:flex-row items-center md:items-end gap-5 md:gap-6 -mt-12 md:mt-[-4rem]">
                            {/* Avatar */}
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-3xl bg-white p-1.5 shadow-2xl overflow-hidden">
                                    <div className="w-full h-full rounded-[1.25rem] bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 group-hover:bg-slate-50 transition-colors relative">
                                        {isUploading ? (
                                            <Loader2 className="w-10 h-10 text-primary animate-spin" />
                                        ) : avatarUrl ? (
                                            <img src={avatarUrl} alt={fullName} className="w-full h-full object-cover rounded-[1rem]" />
                                        ) : (
                                            <User className="w-16 h-16 text-slate-400" />
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={handleImageClick}
                                    disabled={isUploading}
                                    className="absolute bottom-2 right-2 p-2 bg-primary text-white rounded-xl shadow-lg hover:scale-110 transition active:scale-95 disabled:opacity-50"
                                >
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>

                            {/* User Info Overview */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                                    {fullName}
                                    {isPremium && (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                                            PREMIUM
                                        </span>
                                    )}
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-slate-500 font-medium text-xs sm:text-base">
                                    <span className="flex items-center gap-1.5 font-bold text-slate-700">
                                        @{username}
                                    </span>
                                    <span className="hidden xs:block w-1 h-1 rounded-full bg-slate-300" />
                                    <span className="flex items-center gap-1.5">
                                        Student
                                    </span>
                                    <span className="hidden xs:block w-1 h-1 rounded-full bg-slate-300" />
                                    <span className="flex items-center gap-1.5 text-emerald-600">
                                        Active
                                    </span>
                                </div>
                            </div>

                            {/* Points Badge */}
                            <div className="w-full md:w-auto">
                                <div className="px-5 py-3 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex items-center justify-center md:justify-start gap-3">
                                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                                    <div className="text-left">
                                        <p className="text-[9px] sm:text-[10px] font-bold text-purple-400 uppercase tracking-tight">Points</p>
                                        <p className="text-lg sm:text-xl font-black text-purple-700 leading-none">{profile?.points || 0} PTS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Personal Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <Card className="rounded-3xl border-none shadow-md overflow-hidden bg-white">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Personal Details
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                                            <Mail className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email Address</p>
                                            <p className="text-slate-900 font-bold break-all">{email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 shrink-0">
                                            <Phone className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Phone Number</p>
                                            <p className="text-slate-900 font-bold">{phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                                            <Calendar className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Joined Date</p>
                                            <p className="text-slate-900 font-bold">{joinedDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => setIsEditModalOpen(true)}
                                    className="w-full mt-8 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold h-12 rounded-2xl gap-2 transition-all"
                                >
                                    <Settings className="w-4 h-4" />
                                    Edit Settings
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Subscription Status */}
                        <Card className="rounded-3xl border-none shadow-md overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <CreditCard className="w-5 h-5 text-amber-400" />
                                        Subscription
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isPremium ? 'bg-amber-400 text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
                                        {isPremium ? 'Premium' : 'Free Tier'}
                                    </span>
                                </div>

                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    {isPremium
                                        ? "You have full access to all SixthSense JAMB and WAEC prediction tools."
                                        : "Upgrade to premium to unlock all JAMB predicted questions and AI mock tools."}
                                </p>

                                {!isPremium && (
                                    <PremiumButton email={email} userId={user.id} />
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right Column: Statistics */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Stats */}
                            <Card className="rounded-3xl border-none shadow-md bg-white p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[100px] border-l border-b border-blue-500/10 group-hover:scale-110 transition-transform duration-500" />
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 mb-4">
                                    <BookOpen className="w-6 h-6 text-blue-600" />
                                </div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Exams</p>
                                <p className="text-4xl font-black text-slate-900">{(profile?.total_completed || 0) + (profile?.total_started || 0)}</p>
                                <p className="text-[10px] font-medium text-slate-500 mt-2">All time cumulative</p>
                            </Card>

                            <Card className="rounded-3xl border-none shadow-md bg-white p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[100px] border-l border-b border-emerald-500/10 group-hover:scale-110 transition-transform duration-500" />
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-4">
                                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                                </div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Completed</p>
                                <p className="text-4xl font-black text-slate-900">{profile?.total_completed || 0}</p>
                                <p className="text-[10px] font-medium text-slate-500 mt-2">Finished exams</p>
                            </Card>

                            <Card className="rounded-3xl border-none shadow-md bg-white p-6 relative overflow-hidden group sm:col-span-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[100px] border-l border-b border-purple-500/10 group-hover:scale-110 transition-transform duration-500" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 mb-4">
                                            <TrendingUp className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Avg. Score</p>
                                        <p className="text-4xl font-black text-slate-900">
                                            {profile?.total_completed
                                                ? (profile.total_score / profile.total_completed).toFixed(1)
                                                : 0}%
                                        </p>
                                        <p className="text-[10px] font-medium text-slate-500 mt-2">Performance across all subjects</p>
                                    </div>
                                    <div className="hidden sm:block w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${profile?.total_completed ? (profile.total_score / profile.total_completed) : 0}%` }}
                                            className="h-full bg-purple-500"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Edit Profile Modal */}
            < Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen} >
                <DialogContent className="sm:max-w-[425px] rounded-3xl border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black text-slate-900">Edit Profile</DialogTitle>
                        <DialogDescription className="text-slate-500 font-medium">
                            Update your personal information below. Changes will reflect across the platform.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleUpdateProfile} className="space-y-6 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first_name" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">First Name</Label>
                                <Input
                                    id="first_name"
                                    value={formData.first_name}
                                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                    className="rounded-xl border-slate-200 focus:ring-primary h-11 font-medium"
                                    placeholder="Enter first name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last_name" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Last Name</Label>
                                <Input
                                    id="last_name"
                                    value={formData.last_name}
                                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                    className="rounded-xl border-slate-200 focus:ring-primary h-11 font-medium"
                                    placeholder="Enter last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Username</Label>
                            <Input
                                id="username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="rounded-xl border-slate-200 focus:ring-primary h-11 font-bold text-primary"
                                placeholder="Choose a username"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</Label>
                            <Input
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="rounded-xl border-slate-200 focus:ring-primary h-11 font-medium"
                                placeholder="+234 XXX XXX XXXX"
                            />
                        </div>

                        <DialogFooter className="pt-4 flex gap-3 sm:justify-end">
                            <DialogClose asChild>
                                <Button type="button" variant="ghost" className="rounded-xl font-bold text-slate-500">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                disabled={isUpdating}
                                className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold px-6 h-11 min-w-[120px]"
                            >
                                {isUpdating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-4 h-4 mr-2" />
                                        Save Changes
                                    </>
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog >

            <Footer />
        </div >
    )
}
