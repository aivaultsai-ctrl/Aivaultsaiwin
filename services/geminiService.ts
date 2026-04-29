import { GoogleGenAI, Type } from "@google/genai";
import { RoiCalculationRequest, RoiCalculationResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const calculateWastedCapital = async (data: RoiCalculationRequest): Promise<RoiCalculationResponse> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data for UI demonstration.");
    // Fallback for demo purposes if no key is present
    const monthly = data.hoursPerWeek * data.hourlyRate * 4;
    const yearly = monthly * 12;
    return {
      monthlyLoss: monthly,
      yearlyLoss: yearly,
      analysis: `You are burning through €${yearly.toLocaleString()} every year. That's a brand new company van or a family vacation simply vanishing into thin air due to inefficient admin tasks.`
    };
  }

  const monthlyLoss = data.hoursPerWeek * data.hourlyRate * 4;
  const yearlyLoss = monthlyLoss * 12;

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a ruthless, high-stakes business consultant. 
      A business owner spends ${data.hoursPerWeek} hours/week on low-value admin tasks at a value of €${data.hourlyRate}/hour.
      
      Calculated Monthly Loss: €${monthlyLoss}
      Calculated Yearly Loss: €${yearlyLoss}

      Write a short, punchy, visceral analysis (max 3 sentences) of what this lost money represents. 
      Use pain-oriented language (e.g., "bleeding cash", "burning capital"). 
      Make a concrete comparison of what they could buy with this money (e.g., new equipment, marketing budget, family time).
      Do not be polite. Be direct.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            monthlyLoss: { type: Type.NUMBER },
            yearlyLoss: { type: Type.NUMBER }
          },
          required: ["analysis"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const result = JSON.parse(text);
    // Ensure we return the calculated values if the AI decided to recalculate them (or use our pre-calc)
    return {
      analysis: result.analysis,
      monthlyLoss: monthlyLoss,
      yearlyLoss: yearlyLoss
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
     // Fallback if API fails
     return {
      monthlyLoss: monthlyLoss,
      yearlyLoss: yearlyLoss,
      analysis: "We've detected significant capital leakage in your current workflow. Proceed to the audit to stop this loss immediately."
    };
  }
};