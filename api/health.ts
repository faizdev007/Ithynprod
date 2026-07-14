import express from "express";

const app = express();

export default app;

// 1. Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    smtpConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD),
  });
});