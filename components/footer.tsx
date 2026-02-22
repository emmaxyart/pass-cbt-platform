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
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4 hover:opacity-80 transition">
              SixthSense
            </Link>
            <p className="text-sm opacity-80">
              Empowering Nigerian students to excel in JAMB and WAEC exams.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice" className="text-sm opacity-80 hover:opacity-100 transition">
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm opacity-80 hover:opacity-100 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm opacity-80 hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition">
                  FAQ
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition">
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
          <p className="text-sm opacity-80">
            © 2026 SixthSense. All rights reserved.
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
