import express from "express";
import morgan from "morgan";
import postsRouter from "./routes/posts.routes.js";
import { PORT } from "./config.js";
import fileUpload from "express-fileupload";

const app = express();

// SETTINGS
app.set("port", PORT);

// DATABASE CONNECTION
import "./database.js";

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./tmp",
    })
);

// ROUTES
app.use("/api/posts", postsRouter);

export default app;
