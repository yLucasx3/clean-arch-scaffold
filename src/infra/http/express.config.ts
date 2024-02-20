import express, { Router } from "express";
import cors from "cors";
import fooRoute from "./routes/foo.route";
import docsRoutes from "./routes/docs.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const apiRouter = Router();
fooRoute(apiRouter);

const docsRouter = Router();
docsRoutes(docsRouter);

app.use("/api", apiRouter);
app.use(docsRouter);

export { app };
