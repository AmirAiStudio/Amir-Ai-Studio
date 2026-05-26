import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily to handle missing API keys gracefully
let ai: GoogleGenAI | null = null;

try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini Client initialized successfully on the backend.");
  } else {
    console.warn("GEMINI_API_KEY environment variable is not defined. Running in mock/educational demo mode.");
  }
} catch (err) {
  console.error("Error initializing Gemini client:", err);
}

// Ensure pre-flight and basic API-related headers are set
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", platform: "Amir AI Studio" });
});

// Prompt Optimization AI Endpoint
app.post("/api/gemini/optimize", async (req, res) => {
  const { prompt, category } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Missing required parameter 'prompt' (must be a valid string)." });
  }

  // Define some awesome fallback optimizations if Gemini is not configured
  const getDemoOptimization = (original: string, cat: string) => {
    switch (cat?.toLowerCase()) {
      case "image":
        return `[OPTIMIZED FOR MIDJOURNEY v6]: A highly detailed, cinematic photorealistic masterpiece of ${original}, intricate cosmic lighting, volumetric bioluminescence, cyber-organic structures, electric cyan and vivid magenta, shot on 85mm anamorphic lens, extreme fine texture detail, 8k resolution, raytracing, award-winning composition --ar 16:9 --style raw --v 6.0`;
      case "video":
        return `[OPTIMIZED FOR RUNWAY GEN-3]: Cinematic slow tracking drone shot revealing a futuristic sci-fi scene of ${original}, vibrant holographic mist, moody lighting, camera slowly glides forward, 60fps high fidelity rendering, complex neon reflection layers, ultra-immersive atmosphere`;
      case "marketing":
        return `[OPTIMIZED FOR COPYWRITING]: Imagine a future where possibility meets reality. Here is the ultimate hook for: "${original}"\n\n📢 THE HOOK:\n"Step into the future TODAY. Experience the synergy of cognitive power and artistic agency with Amir AI Studio's revolutionary interface."\n\n✨ VALUE PROP:\n- Unrivaled Creativity: Automate production while amplifying your true creative essence.\n- Futuristic Edge: Gain the skills of tomorrow, configured for instant high-ROI deployment.`;
      default:
        return `[OPTIMIZED FOR DESIGN]: Human-in-the-loop futuristic design concept of ${original}. Clean swiss typography overlay, grid layouts, neon glowing margins, sophisticated dark theme, maximum visual contrast, elegant UI/UX design architecture.`;
    }
  };

  try {
    if (ai) {
      console.log(`Optimizing prompt via Gemini. Category: ${category}`);
      const systemInstruction = `You are a world-class prompt engineering specialist at "Amir AI Studio". 
Your goal is to optimize the user's creative prompt to unlock hyper-detailed, aesthetically stunning results.
Depending on the category provided, optimize the prompt as follows:
- "image": Create an elite, descriptive visual prompt suitable for Midjourney, Stable Diffusion, or DALL-E 3. Include camera lens parameters (e.g. 85mm, anamorphic), cinematic lighting descriptions (volumetric, split-toning, neon embers), and style guides (photorealistic, cyberpunk, high-contrast, bento-grid, 3D render). Keep the output crisp.
- "video": Create a cinematic motion prompt optimized for Runway Gen-3 or Sora, focusing on camera movement (slow tracking, orbital pan, continuous pull-out) and physical motion (particles swirling, liquid light shimmering, realistic steam drift).
- "marketing": Create an engaging, copy-ready marketing hook, standard value propositions, and direct CTA guidelines based on their topic.
- "design": Create a structured layout UI/UX style guide prompt (color harmony, typography system, spacing ratios, interactive micro-interaction definitions).

Make your response clean, professional, and do NOT include conversational preambles. Output only the optimized prompt, structured headers, and brief guidance in elegant markdown. Keep your message short and high-impact.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Category: ${category || "image"}\nOriginal prompt: ${prompt}`,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const optimizedText = response.text || getDemoOptimization(prompt, category);
      return res.json({
        success: true,
        originalPrompt: prompt,
        optimizedPrompt: optimizedText,
        engine: "Gemini 3.5 Flash",
        timestamp: new Date().toISOString()
      });
    } else {
      // Return beautiful demo optimized output to ensure it works beautifully without the API Key
      console.log("No Gemini API key detected. Returning calculated premium demo prompt.");
      return res.json({
        success: true,
        originalPrompt: prompt,
        optimizedPrompt: getDemoOptimization(prompt, category) + "\n\n*(Note: Running in high-fidelity sandbox mode. Configure your GEMINI_API_KEY in Secrets for live AI optimization!)*",
        engine: "Amir Studio Logic Sandbox",
        timestamp: new Date().toISOString()
      });
    }
  } catch (error: any) {
    console.error("Gemini optimization error:", error);
    return res.status(500).json({
      error: "AI Optimization failed",
      details: error.message || error,
      fallback: getDemoOptimization(prompt, category)
    });
  }
});

// Contact API Endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all required fields (Name, Email, Message)." });
  }

  // High fidelity registration logging
  console.log(`[CONTACT RECEIVED] Name: ${name}, Email: ${email}, Interest: ${interest}, Message: ${message}`);

  return res.json({
    success: true,
    message: `Thank you, ${name}! Your request has been securely logged at Amir AI Studio.`,
    referenceID: `AMIR-AI-${Math.floor(100000 + Math.random() * 900000)}`,
    timestamp: new Date().toISOString()
  });
});

// Vite & Static file handler integration
async function main() {
  if (process.env.NODE_ENV !== "production") {
    // Mount Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server middleware mounted.");
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Serving production build from:", distPath);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER ONLINE] running on http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
});
