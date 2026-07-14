import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

export default app;

const PORT = 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Creates a Nodemailer transporter lazily when needed.
 * This prevents the app from crashing on start if GMAIL credentials are not present.
 */
function getEmailTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn("⚠️ GMAIL_USER or GMAIL_APP_PASSWORD not set. Emails will be logged but not sent.");
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });
}

// -------------------------------------------------------------
// API ENDPOINTS
// -------------------------------------------------------------


// -------------------------------------------------------------
// VITE DEV SERVER OR STATIC FILE SERVING MIDDLEWARE
// -------------------------------------------------------------

async function initializeViteMiddleware() {
  if (process.env.NODE_ENV !== "production") {
    console.log("🛠️ Starting Vite in Development Middleware Mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Serve development assets
    app.use(vite.middlewares);
  } else {
    console.log("🚀 Starting Production Server Serving Static Assets...");
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files
    app.use(express.static(distPath));
    
    // Handle SPA routing wildcard
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Start listening to traffic
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🌐 Server operating seamlessly on http://0.0.0.0:${PORT}`);
  });
}

// Boot the server
initializeViteMiddleware().catch((err) => {
  console.error("🔴 Server initialization failure:", err);
});
