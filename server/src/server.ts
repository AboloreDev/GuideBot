import express, { type Request, type Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

// configure the dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const allowedOrigins = process.env.FRONTEND_DEV_URL;

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Server working ✅");
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "You're connected" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at PORT:${PORT}`);
});
