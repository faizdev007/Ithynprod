import express from "express";

const app = express();

// 1. Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    smtpConfigured: !!(process.env.VITE_API_GMAIL_USER && process.env.VITE_API_GMAIL_APP_PASSWORD),
  });
});