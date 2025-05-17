import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import formRoutes from "./src/routes/formRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(helmet()); // Add security headers
app.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(json()); // parse JSON bodies

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", message: "Server is running" });
});

// Form routes
app.use("/api/forms", formRoutes);

// Start server
const PORT = process.env.PORT || 4000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
