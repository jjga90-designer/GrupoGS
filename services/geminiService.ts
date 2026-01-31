import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult, WebsiteAnalysis, GroundingSource } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeWebsite = async (url: string): Promise<AnalysisResult> => {
  const modelId = "gemini-3-flash-preview";
  
  const prompt = `
    Analyze the entity associated with this website URL: ${url}. 
    Use Google Search to find up-to-date information about the company or organization.
    
    Return a detailed business profile including:
    1. The official Company Name.
    2. The Industry they operate in.
    3. A short tagline or description (under 15 words).
    4. A full overview/summary of what they do (approx 50 words).
    5. A list of their main products or services.
    6. Contact information (Address, Phone, Email) if publicly available.
    7. Key highlights or competitive advantages.
    8. A brief summary of their reputation or market presence based on search results.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            companyName: { type: Type.STRING },
            industry: { type: Type.STRING },
            shortDescription: { type: Type.STRING },
            fullOverview: { type: Type.STRING },
            services: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            contact: {
              type: Type.OBJECT,
              properties: {
                address: { type: Type.STRING },
                phone: { type: Type.STRING },
                email: { type: Type.STRING },
                website: { type: Type.STRING }
              }
            },
            keyHighlights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            reputationSummary: { type: Type.STRING }
          }
        }
      }
    });

    let responseText = response.text || "{}";
    // Clean up potential markdown code blocks if the model includes them
    responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

    const data: WebsiteAnalysis = JSON.parse(responseText);

    // Extract grounding sources
    const sources: GroundingSource[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web) {
          sources.push({
            title: chunk.web.title || "Source",
            uri: chunk.web.uri || "#"
          });
        }
      });
    }

    // Filter duplicates
    const uniqueSources = sources.filter((v, i, a) => a.findIndex(t => (t.uri === v.uri)) === i);

    return {
      data,
      sources: uniqueSources
    };

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
