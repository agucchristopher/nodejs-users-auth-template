import express from "express";
import dotenv from "dotenv";
import { users } from "./routes/index.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT} ✔`);
});
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.set("strictQuery", true);

const client = mongoose.connect(
  "mongodb://127.0.0.1:27017/users",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err.message) : console.log("Connected to database")
);

// ngrok.connect(process.env.PORT).then((url) => {
//   console.log(`Server forwarded to public url ${url}`);
// });
