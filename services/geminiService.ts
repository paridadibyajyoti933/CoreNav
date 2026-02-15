
import { GoogleGenAI } from "@google/genai";

export const generateDroneImage = async (): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A hyper-realistic cinematic hero shot of a futuristic sleek carbon-fiber professional camera drone named VAU Air, flying through a dramatic mountain landscape at sunset, with golden fire sparks and embers in the air. The design is aggressive and industrial, like a Battlefield video game asset. Visible 4K camera lens with gold accents. Warm cinematic lighting, 8k resolution, military-grade aesthetic. Subtle 'Made in India' engraving on the side. High contrast, dark charcoal and glowing yellow color palette.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1920';
  } catch (error) {
    console.error("Error generating drone image:", error);
    return 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1920';
  }
};

export const generateEnterpriseDroneImage = async (): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A hyper-realistic cinematic studio product shot of a high-end industrial enterprise drone named VAIU MOVER. It has a vibrant yellow main chassis with rugged matte black carbon fiber arms and black propellers. The design is inspired by a DJI Inspire but significantly more industrial and aggressive. It features a visible top-mounted LIDAR sensor spinning and a massive triple-lens camera gimbal. Glowing yellow status LEDs. Background is a dark, high-tech engineering hanger with blueprints and holographic data displays. 8k resolution, cinematic lighting, 'Battlefield' game aesthetic.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return 'https://images.unsplash.com/photo-1579829721051-dc2062f62445?auto=format&fit=crop&q=80&w=1920';
  } catch (error) {
    console.error("Error generating enterprise drone image:", error);
    return 'https://images.unsplash.com/photo-1579829721051-dc2062f62445?auto=format&fit=crop&q=80&w=1920';
  }
};

export const generateTrackingFrame = async (): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A cinematic POV first-person view from a high-tech drone tracking a majestic Bengal tiger moving through a dense, misty Indian jungle at dawn. Digital HUD (Heads-Up Display) overlay with green and yellow target brackets around the tiger. Thermal highlights, scan lines, data readouts. High contrast, moody forest lighting with sunbeams breaking through canopy. Realistic nature photography, 8k.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=1920';
  } catch (error) {
    console.error("Error generating tracking frame:", error);
    return 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=1920';
  }
};
