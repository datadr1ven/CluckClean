'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { generateCluckTip } from '@/utils/gemini';

export default function DailyTipGenerator() {
  const [tip, setTip] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleGenerateTip = async () => {
    setIsLoading(true);
    try {
      const newTip = await generateCluckTip();
      setTip(newTip);
      setIsVisible(true);
    } catch (error) {
      setTip("Oops! My beak is stuck! Remember: brush twice daily for 2 minutes each time. 🐔✨");
      setIsVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-16">
      {/* Generate Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mb-8"
      >
        <motion.button
          onClick={handleGenerateTip}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-semibold py-4 px-8 rounded-2xl text-lg md:text-xl shadow-xl transition-colors duration-200 flex items-center gap-3 mx-auto"
        >
          {isLoading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Thinking...
            </>
          ) : (
            <>
              🐔 Get Today's Cluck Tip! 🦷
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Tip Display Card */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-xl p-8 mx-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🐔</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Today's Cluck Tip
              </h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {tip}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}