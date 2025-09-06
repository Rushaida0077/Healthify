import OpenAI from 'openai';



const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
   dangerouslyAllowBrowser: true,
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
  
  
});
const AIMODELNAME = "google/gemma-3-4b-it:free";

export const CalculateCaloriesAI = async (PROMPT) => {
  return await openai.chat.completions.create({
    model: AIMODELNAME,
    messages: [{ role: "user", content: PROMPT }],
    response_format: "json_object",
  });
};

export const GenerateAIRecipes = async (PROMPT) => {
  return await openai.chat.completions.create({
    model: AIMODELNAME,
    messages: [{ role: "user", content: PROMPT }],
    response_format: "json_object",
  });
};


; // put your Eden AI key in .env

import axios from "axios";

/**
 * Generate an image from a prompt using Craiyon (free, no API key needed)
 * @param {string} prompt - Text prompt describing the image
 * @returns {string} - URL of the generated image (Base64)
 */
export async function GenerateRecipeImage(prompt) {
  if (!prompt) return ""; // fallback for empty prompt

  try {
    const response = await axios.post("https://backend.craiyon.com/generate", {
      prompt: prompt,
    });

    if (response.data && response.data.images && response.data.images.length > 0) {
      // Use the first generated image
      const base64Image = response.data.images[0];
      const imageUrl = `data:image/png;base64,${base64Image}`;
      console.log("Generated Image URL:", imageUrl);
      return imageUrl;
    } else {
      console.error("No images returned from Craiyon");
      return "";
    }

  } catch (e) {
    console.error("Error generating image:", e);
    return ""; // fallback
  }
}

