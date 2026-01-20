'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    icon: "🚀",
    title: "Next.js 15",
    description: "Latest App Router with TypeScript for modern React development"
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    description: "Utility-first styling with responsive design and glassmorphism effects"
  },
  {
    icon: "🎭",
    title: "Framer Motion",
    description: "Smooth animations and micro-interactions for delightful UX"
  },
  {
    icon: "🤖",
    title: "Google Gemini AI",
    description: "Powered by Gemini 1.5 Flash for intelligent content generation"
  },
  {
    icon: "☁️",
    title: "Google Cloud Run",
    description: "Serverless deployment with automatic scaling and zero maintenance"
  },
  {
    icon: "⚡",
    title: "Built with Grok",
    description: "Rapid development accelerated by AI assistance in ~6 hours"
  }
];

const projects = [
  {
    title: "CluckClean Dental App",
    description: "Motivational oral hygiene app with AI-powered tips and habit tracking",
    tech: ["Next.js", "Gemini AI", "Framer Motion"],
    status: "Current Project"
  },
  {
    title: "AI Content Generator",
    description: "Multi-purpose content creation tool using various AI models",
    tech: ["React", "OpenAI API", "Node.js"],
    status: "Completed"
  },
  {
    title: "E-commerce Dashboard",
    description: "Real-time analytics and inventory management system",
    tech: ["Vue.js", "Firebase", "Chart.js"],
    status: "Completed"
  }
];

export default function SkillsShowcase() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          🛠️ Skills & Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Built with cutting-edge technologies and AI-accelerated development.
          This entire portfolio was created in under 6 hours using Grok and continue.dev!
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 2.0 + index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          📁 Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
              className="bg-white/50 rounded-xl p-6 border border-white/30"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-800">{project.title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Current Project'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Development Speed Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 2.6,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="mt-12 text-center"
      >
        <div className="inline-block backdrop-blur-md bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-300/30 rounded-2xl shadow-xl p-6">
          <div className="text-3xl mb-3">⚡🚀</div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            AI-Accelerated Development
          </h4>
          <p className="text-gray-700">
            This entire CluckClean portfolio was built in under 6 hours using Grok AI and continue.dev,
            demonstrating the power of AI-assisted development for the "New Year, New You" challenge!
          </p>
        </div>
      </motion.div>
    </div>
  );
}