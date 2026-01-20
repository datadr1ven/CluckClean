'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { generatePersonalizedAdvice } from '@/utils/gemini';

export default function HabitAdvisor() {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleGetAdvice = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const newAdvice = await generatePersonalizedAdvice(input);
      setAdvice(newAdvice);
      setIsVisible(true);
    } catch (error) {
      setAdvice("Great start! Try adding flossing to your routine - your future self will thank you! 🐔🦷");
      setIsVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGetAdvice();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-xl p-8 mx-4"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            🐔 Beak Check Advisor
          </h2>
          <p className="text-gray-600">
            Describe your brushing routine and get personalized tips from CluckClean!
          </p>
        </div>

        <div className="space-y-4">
          {/* Input Area */}
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., 'I brush once a day in the morning for about 1 minute...'"
              className="w-full p-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          {/* Get Advice Button */}
          <motion.button
            onClick={handleGetAdvice}
            disabled={isLoading || !input.trim()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Getting advice...
              </>
            ) : (
              <>
                🦷 Get Personalized Tips 🐔
              </>
            )}
          </motion.button>
        </div>

        {/* Advice Display */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 pt-6 border-t border-white/30"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200/50"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🐔</div>
                  <div>
                    <h4 className="font-semibold text-emerald-800 mb-2">
                      CluckClean Says:
                    </h4>
                    <p className="text-emerald-700 leading-relaxed">
                      {advice}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}