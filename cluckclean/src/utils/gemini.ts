import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function generateCluckTip(): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `As CluckClean the motivational chicken, generate 1 fun, encouraging daily oral hygiene tip for adults. Make it short, punny, and positive. Example: 'Floss like your breath depends on it... because it cluckin' does!'`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const tip = response.text().trim();

    return tip;
  } catch (error) {
    console.error('Error generating tip:', error);
    return "Oops! My beak is stuck! Remember: brush twice daily for 2 minutes each time. 🐔✨";
  }
}

export async function generatePersonalizedAdvice(routine: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `As CluckClean the friendly dental chicken, someone described their brushing routine as: "${routine}". Give them 1-2 specific, encouraging pieces of advice to improve their oral hygiene. Keep it fun, positive, and chicken-themed. Make it actionable and short.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const advice = response.text().trim();

    return advice;
  } catch (error) {
    console.error('Error generating advice:', error);
    return "Great start! Try adding flossing to your routine - your future self will thank you! 🐔🦷";
  }
}