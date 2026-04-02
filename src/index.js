import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js";
import { connect } from "mongoose";

dotenv.config({
    path: "./.env",
});

/* EXPRESS WORKING */

const port = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection errro", err);
        process.exit(1);
    });