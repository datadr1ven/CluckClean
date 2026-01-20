# CluckClean - Your 2026 Dental Revolution

A fun, motivational dental hygiene portfolio app built for the "New Year, New You" dev.to challenge. Features a cheeky cartoon chicken mascot that motivates users to brush better, floss smarter, and smile wider!

## 🐔 Features

- **Animated Hero Section**: Smooth Framer Motion animations with glassmorphism design
- **AI-Powered Daily Tips**: Gemini AI generates humorous, chicken-themed oral hygiene tips
- **Personalized Habit Advisor**: Get customized advice based on your brushing routine
- **Skills Showcase**: Highlighting modern web technologies and AI-accelerated development
- **Responsive Design**: Mobile-first approach with beautiful animations

## 🚀 Tech Stack

- **Next.js 15** - App Router with TypeScript
- **Tailwind CSS** - Utility-first styling with glassmorphism effects
- **Framer Motion** - Smooth animations and micro-interactions
- **Google Gemini AI** - Intelligent content generation
- **Google Cloud Run** - Serverless deployment

## 🛠️ Development Setup

1. **Clone and install dependencies:**
   ```bash
   npx create-next-app@latest cluckclean --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
   cd cluckclean
   npm install framer-motion @google/generative-ai
   ```

2. **Set up Gemini API:**
   - Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create `.env.local` in the root directory:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## ☁️ Deployment to Google Cloud Run

1. **Build the Docker image:**
   ```bash
   # Create Dockerfile in project root
   docker build -t cluckclean .
   ```

2. **Tag and push to Google Container Registry:**
   ```bash
   # Replace [PROJECT-ID] with your GCP project ID
   docker tag cluckclean gcr.io/[PROJECT-ID]/cluckclean
   docker push gcr.io/[PROJECT-ID]/cluckclean
   ```

3. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy cluckclean \
     --image gcr.io/[PROJECT-ID]/cluckclean \
     --allow-unauthenticated \
     --labels dev-tutorial=devnewyear2026 \
     --platform managed \
     --region us-central1
   ```

## 📁 Project Structure

```
cluckclean/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── DailyTipGenerator.tsx
│   │   ├── HabitAdvisor.tsx
│   │   └── SkillsShowcase.tsx
│   └── utils/
│       └── gemini.ts
├── public/
│   └── cluckclean-mascot.svg
└── Dockerfile
```

## 🎯 Challenge Submission

This project was built for the "New Year, New You" dev.to portfolio challenge, showcasing:

- **AI-Accelerated Development**: Built in ~6 hours using Grok AI and continue.dev
- **Modern Tech Stack**: Latest Next.js 15 with cutting-edge features
- **Serverless Deployment**: Google Cloud Run with challenge-required labels
- **Fun & Functional**: Humorous dental hygiene app concept

## 📝 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_gemini_api_key
```

## 🤝 Contributing

This is a portfolio project, but feel free to fork and adapt for your own dental hygiene app!

## 📄 License

Built with ❤️ and lots of ☕ for the dev.to community.

---

**Built fast with Grok & Gemini – © Nick 2026**