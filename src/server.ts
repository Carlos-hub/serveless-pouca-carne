import express, { json, NextFunction, Request, request, Response, response } from "express";
import "express-async-errors";
import cors from 'cors';

import { routes } from "./routes";


const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers","*")
    app.use(cors());
    next();
});

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
  console.log(`server is running at the port ${process.env.PORT}`)
})