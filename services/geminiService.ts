
import { GoogleGenAI } from "@google/genai";

// Fixed: Strictly following initialization guidelines (apiKey must be from process.env.API_KEY directly)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAgentResponse = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are Broomy, the AI concierge for Broomberg, a premium home services platform in Delhi NCR.
        Help users select services: Deep Cleaning, Pest Control, Sanitization.
        Be polite, professional, and focus on service benefits.
        Recommend 'Deep' tiers for first-time users.
        Mention that Broomberg uses eco-friendly chemicals and in-house trained staff.
        Keep answers concise. If asked about pricing, mention we have tiers like Basic, Deep, and Premium.`,
      },
    });
    // Fixed: Correctly accessing .text property (not a method)
    return response.text || "I'm sorry, I couldn't process that. How can I help you with your cleaning needs today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hello! I'm Broomy. I can help you find the right cleaning service for your home. What are you looking for?";
  }
};
