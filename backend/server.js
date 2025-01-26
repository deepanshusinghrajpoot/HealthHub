import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from './config/mongodb.js';
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";


//patel deploy
import path from "path";





// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());               // It is allow to connect the backend





// patel deploy
const _dirname = path.resolve();






// api endpoints
app.use("/api/admin", adminRouter );       //    localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);      //    
app.use("/api/user", userRouter);






//patel deploy 
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", ( _ , res)=>{
       res.sendFile(path.resolve(_dirname, "frontend", "dist",  "index.html"));
})






app.get("/", (req, res)=>{
    res.send("Api Working");
});

app.listen(port, ()=> console.log("Server Started On Port", port));