import express, { json, NextFunction, Request, request, Response, response } from "express";
import "express-async-errors";
import cors from 'cors';

import { routes } from "./routes";

const allowedOrigins = ['http://localhost:5173', 'http://191.240.128.102', 'https://pouca-carne.vercel.app/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
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