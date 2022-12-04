import express, { json, NextFunction, Request, request, Response, response } from "express";
import "express-async-errors";
import cors from 'cors';

import { routes } from "./routes";

const allowedOrigins = ['http://localhost:5173', 'http://191.240.128.102', 'pouca-carne-mkfddqw4y-carlos-hub.vercel.app', 'https://pouca-carne.vercel.app/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();

app.use(cors(options))
app.use(express.json())

app.get("/",(req,res) =>{
  res.json("Hello World!")   
})

app.use(routes)

app.use((err:Error,request:Request,response:Response, next:NextFunction) =>{
  if(err instanceof Error){
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server Error",
  })
})

app.listen(process.env.PORT || 5000,()=>{
  console.log("server is running at the port 5000")
})