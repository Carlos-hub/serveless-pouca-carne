import { prisma } from "../../../../databse/prismaClient";

interface ICreateDelivery{
 id_produto: string;
 preco:number;
 id_cliente:string;
 cliente_numero:string;
 forma_pagamento:string;
}
export class CreateDeliveryUseCase{

 async execute({id_produto,preco,id_cliente,cliente_numero,forma_pagamento}:ICreateDelivery){
  const date = new Date();
  const codPedido = `PED`
  const nome = ` Pedido name`

  const cadastraPedido = await prisma.pedidos.create({
   data:{
     nome,
     id_produto,
     preco,
     id_cliente,
     cliente_numero,
     forma_pagamento,
     cod_pedido:codPedido,
     id_cliente_endereco:"",
     cliente_endereco: "teste",
     id_entregador:"",
     status: "pendente"
   }
  })
  return cadastraPedido;
 }
}