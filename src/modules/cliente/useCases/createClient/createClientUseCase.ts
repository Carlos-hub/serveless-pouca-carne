import { prisma } from "../../../../databse/prismaClient";
import { hash } from "bcrypt"

interface ICreateClient{
  nome:string;
  email:string;
  cpf: string;
  telefone:string;
  dataNascimento:Date;
  senha:string;
}

export class CreateClientUseCase{

  async execute({nome,email,cpf,telefone,dataNascimento,senha}:ICreateClient){
    // validar se usuário existe
    const clientExist = await prisma.clientes.findFirst({
      where:{
        cpf:{
          equals: cpf
        }
      }
    })
    if(clientExist){
      throw new Error("Client already exists!")
    }
    // Criptografar senha
    const hashSenha = await hash(senha,10)
    // Salvar ao cliente
    const client = await prisma.clientes.create({
      data:{
        nome,
        email,
        cpf,
        telefone,
        dataNascimento,
        senha:hashSenha
      }
    })
  }
}