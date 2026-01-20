'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import DailyTipGenerator from "@/components/DailyTipGenerator";
import HabitAdvisor from "@/components/HabitAdvisor";
import SkillsShowcase from "@/components/SkillsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl text-center"
      >
        {/* Mascot Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="mb-8"
        >
          <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full shadow-2xl border-8 border-white/50"></div>
            <Image
              src="/cluckclean-mascot.svg"
              alt="CluckClean the motivational chicken mascot"
              width={320}
              height={320}
              className="relative z-10 w-full h-full object-contain rounded-full"
              priority
            />
          </div>
        </motion.div>

        {/* Main Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          CluckClean:
          <br />
          <span className="text-emerald-600">Your 2026 Dental Revolution</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Let this cheeky chicken motivate you to brush better, floss smarter, and smile wider!
          <br />
          <span className="text-emerald-500 font-medium">New Year, New You – Starting with a brighter smile! 🐔✨</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg md:text-xl shadow-xl transition-colors duration-200"
          >
            Get Your First Cluck Tip! 🦷
          </motion.button>
        </motion.div>

        {/* Daily Tip Generator */}
        <DailyTipGenerator />

        {/* Habit Advisor */}
        <HabitAdvisor />

        {/* Skills & Projects Showcase */}
        <SkillsShowcase />

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-sm text-gray-600"
        >
          Built fast with Grok & Gemini – © Nick 2026
        </motion.p>
      </motion.main>
    </div>
  );
}
