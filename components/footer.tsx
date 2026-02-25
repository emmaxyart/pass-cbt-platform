'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-foreground text-background py-6 md:py-8"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 font-black text-2xl mb-4 hover:opacity-80 transition text-primary">
              SixthSense
            </Link>
            <p className="text-sm opacity-80 leading-relaxed font-medium">
              Empowering Nigerian students to achieve 300+ in JAMB and WAEC with smart CBA tools and analytics.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-300">Product</h3>
            <ul className="space-y-3 font-medium">
              <li>
                <Link href="/practice" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  Free Demo Test
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  Exam Syllabus
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-300">Company</h3>
            <ul className="space-y-3 font-medium">
              <li>
                <Link href="#about" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-300">Contact</h3>
            <ul className="space-y-3 font-medium">
              <li>
                <Link href="mailto:support@sixthsense.com.ng" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  support@sixthsense.com.ng
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/2349037441641" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  WhatsApp Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-300">Legal</h3>
            <ul className="space-y-3 font-medium">
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-background/20 mb-5" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-sm opacity-80 font-medium">
            © 2026 SixthSense Exam Prep. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
