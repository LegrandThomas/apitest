import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/route.js";
 dotenv.config();
const app = express();

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.json());

app.get('/setcookie', (req, res) => {
  res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
      maxAge: 5000,
      // expires works the same as the maxAge
      expires: new Date('01 12 2021'),
      secure: true,
      httpOnly: true,
      sameSite: 'lax'
  });
  res.send('Cookie have been saved successfully');

});

app.use(router);
app.listen(5000, ()=> console.log(`Tourne sur le port : ${process.env.PORT} et l'environement: ${process.env.NODE_ENV} `));
export default app
 