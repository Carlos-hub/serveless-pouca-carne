import { prisma } from "../../../../databse/prismaClient";
import { hash } from "bcrypt";

interface ICreateEntregador{
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
}

export class createEntregadorUseCase{

 async execute({nome,telefone,email,senha,cpf}:ICreateEntregador){
    // validar se entergador já é cadastrado
    const entregadorExist = await prisma.entregador.findFirst({
     where:{
      cpf:{
       equals:cpf
      }
     }
    })
    if(entregadorExist){
     throw new Error("Enbtregador already Exists!")
    }
    // criptografar senha
    const hashSenha = await hash(senha,10)
    // salvar entregador

    const entregador = await prisma.entregador.create({
      data:{
        nome,
        telefone,
        email,
        senha:hashSenha,
        cpf
      }
    })
 }
}