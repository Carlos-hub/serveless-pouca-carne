import { prisma } from "../../../../databse/prismaClient";
import { hash } from "bcrypt"

interface ICreateUserRes{
  nome:string;
  email:string;
  cpf: string;
  telefone:string;
  datanascimento:string;
  senha:string;
}

export class CreateUserResUseCase{

  async execute({nome,email,cpf,telefone,datanascimento,senha}:ICreateUserRes){
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
        datanascimento,
        senha:hashSenha
      }
    })
  }
}