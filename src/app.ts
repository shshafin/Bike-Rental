import express, { Application } from "express";
import cors from "cors";
import router from "./routes";
import { notFound } from "./middleware/notFound";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use("/api", router);

// not found route
app.use(notFound);

export default app;
