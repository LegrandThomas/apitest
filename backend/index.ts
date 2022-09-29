import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import  router from "express"
 

const app:any = express();

const whitelist:string[] = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin:any, callback:any) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
};
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.json());
app.use(router);

dotenv.config();

app.listen(5000, ()=> console.log(`Your port is ${process.env.PORT}`));
export default app
 