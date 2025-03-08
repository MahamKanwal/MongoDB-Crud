import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectToDb from "./db/db.js";

const app = express();
app.use(cors());
app.use(express.json());

// connect to db
connectToDb()

// middlewares

// app.get("/",(req,res)=>{
//     res.send("server is active")
// })

app.use("/api",userRoutes);

app.listen(5000,()=>{
    console.log("server is listening 5000");
});
