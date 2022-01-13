import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(
  helmet({
    hidePoweredBy: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.get("/", (req: Request, res: Response) => {
  res.send("Running Http Request ...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
