import { prisma } from "../../../databse/prismaClient";
import { compare } from 'bcrypt'
import { sign, decode, verify } from 'jsonwebtoken';
interface IAuthenticateRestaurante{
  email:string;
  senha:string;
}

export class AuthenticateRestauranteUseCase{
  async execute({email,senha}:IAuthenticateRestaurante){
   // receber login e senha

   // verificar se username cadastrado
      const client = await prisma.usuarios.findFirst({
        where:{
          email
        }
      })

      if(!client){
        throw new Error("Credentials invalid")
      }
   // verificar senha corresponde
      const clientPass = await compare(senha,client.senha);

      if(!clientPass){
        throw new Error("Credentials invalid");
      }
   // gerar token
      const token = sign({email}, "6ee0933944d2645860af1556003a31d" , {
        subject: client.id,
        expiresIn: "1d"
      })

      const decodes = decode(token,{complete: true})
      return { token,decodes};

  
  }
}
