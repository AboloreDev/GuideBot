import express, { type Request, type Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

// configure the dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT;
// const allowedOrigins = ""

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Server working ✅");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at PORT:${PORT}`);
});
