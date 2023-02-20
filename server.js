import express from "express";
import cors from "cors";
import productRouter from "./routes/product.js";
import "dotenv/config";

const port = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.json("yup it's working");
});
app.use("/api/products", productRouter);

app.listen(port, (err) => {
   err ? console.log(err) : console.log("server is up and running on port " + port);
});
