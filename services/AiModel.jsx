import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
   dangerouslyAllowBrowser: true,
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
  
  
});

export  const CalculateCaloriesAI = async(PROMPT) =>  await openai.chat.completions.create({
    model: "google/gemini-2.0-flash-exp:free",
    messages: [
      { role: "user", content: PROMPT }
    ],
  })

  //console.log(CalculateCalories.choices[0].message)

