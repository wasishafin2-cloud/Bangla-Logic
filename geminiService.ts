
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeArgument = async (argument: string): Promise<AnalysisResult> => {
  const prompt = `
    Analyze the following argument provided in a Bangladeshi cultural context (can be in Bangla or English). 
    Identify logical fallacies (like Ad Hominem, Strawman, Slippery Slope, etc.). 
    Provide an explanation and a strong logical counter-argument.
    
    Argument: "${argument}"
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          fallaciesFound: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of names of logical fallacies identified."
          },
          explanation: {
            type: Type.STRING,
            description: "A clear explanation of why the argument is flawed."
          },
          counterArgument: {
            type: Type.STRING,
            description: "A polite but logically sound rebuttal."
          },
          logicScore: {
            type: Type.NUMBER,
            description: "A score from 0 to 100 indicating logical strength."
          }
        },
        required: ["fallaciesFound", "explanation", "counterArgument", "logicScore"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("Analysis failed. Please try again.");
  }
};
