
import { GoogleGenAI, Type } from "@google/genai";
import { NameSuggestion } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateNames = async (
  category: string,
  keywords: string,
  gender: string,
  country: string,
  religion: string,
  birthYear: string,
): Promise<NameSuggestion[]> => {
  try {
    let prompt = `Act as a creative naming expert. Your task is to generate 10 advanced and exceptionally creative names for the category: "${category}".

These names should be entirely unique, going far beyond simple database lookups or common suggestions. Think inventively and create new words where appropriate.

**Core Context & Keywords:**`;

    if (keywords) {
      prompt += `\n- Thematic Keywords: "${keywords}". Use these as a starting point. Explore synonyms, related concepts, and even abstract ideas to generate suggestions.`;
    } else {
        prompt += `\n- No specific keywords provided. Use the category description for inspiration.`
    }

    const hasAdvancedFilters = gender !== 'Unisex' || country || religion || birthYear;

    if (hasAdvancedFilters) {
        prompt += `\n\n**Advanced Filters (Consider these deeply for cultural and historical context):**`
    }

    if (gender && gender !== 'Unisex') {
      prompt += `\n- Gender Context: The names should be suitable for the ${gender} gender.`;
    }

    if (country) {
      prompt += `\n- Cultural/Historical Context: Draw inspiration from the culture, history, and language of: ${country}.`;
    }

    if (religion) {
      prompt += `\n- Religious Context: Consider names with a connection to the mythology, texts, or traditions of: ${religion}.`;
    }

    if (birthYear) {
      prompt += `\n- Era Context: Suggest names that reflect the style, popularity, and historical context of the era around the year: ${birthYear}.`;
    }

    prompt += `\n\nFor each generated name, provide a short, catchy, one-sentence description that explains its origin or meaning.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            names: {
              type: Type.ARRAY,
              description: "A list of generated name suggestions.",
              items: {
                type: Type.OBJECT,
                properties: {
                  name: {
                    type: Type.STRING,
                    description: "The generated name."
                  },
                  description: {
                    type: Type.STRING,
                    description: "A short, catchy description for the name."
                  }
                },
                required: ["name", "description"]
              }
            }
          },
          required: ["names"]
        }
      }
    });

    const jsonText = response.text;
    const parsedJson = JSON.parse(jsonText);
    return parsedJson.names || [];

  } catch (error) {
    console.error("Error generating names with Gemini API:", error);
    throw new Error("Failed to generate names. The AI may be experiencing high traffic. Please try again later.");
  }
};