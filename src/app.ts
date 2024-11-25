import express, { Application } from "express";
import cors from "cors";
import router from "./routes";
import { notFound } from "./middleware/notFound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use("/api", router);

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
