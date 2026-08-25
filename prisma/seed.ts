import { hash } from "bcrypt";
import { prisma } from "../src/databse/prismaClient";

const produtos = [
  {
    nome: "Pouca Carne Clássico",
    descricao: "O nosso hambúrguer de sempre, no pão brioche",
    ingredientes: "Pão brioche, blend 180g, queijo prato, alface, tomate",
    valor_unitario: "1",
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    valor: 28.9,
    valordesconto: 24.9,
  },
  {
    nome: "Pouca Carne Cheddar Bacon",
    descricao: "Cheddar derretido e bacon crocante",
    ingredientes: "Pão brioche, blend 180g, cheddar, bacon, cebola caramelizada",
    valor_unitario: "1",
    imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80",
    valor: 34.9,
    valordesconto: 29.9,
  },
  {
    nome: "Pouca Carne Duplo",
    descricao: "Dois blends para quem tem fome de verdade",
    ingredientes: "Pão brioche, 2x blend 180g, queijo prato, molho da casa",
    valor_unitario: "1",
    imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    valor: 42.9,
    valordesconto: 0,
  },
  {
    nome: "Pouca Carne Veggie",
    descricao: "Hambúrguer de grão-de-bico, sem carne mesmo",
    ingredientes: "Pão integral, burger de grão-de-bico, rúcula, tomate seco",
    valor_unitario: "1",
    imagem: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80",
    valor: 30.9,
    valordesconto: 0,
  },
  {
    nome: "Batata Frita Rústica",
    descricao: "Porção de batatas com alecrim e sal grosso",
    ingredientes: "Batata, alecrim, sal grosso",
    valor_unitario: "1",
    imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
    valor: 18.9,
    valordesconto: 0,
  },
  {
    nome: "Milk Shake de Chocolate",
    descricao: "500ml de milk shake cremoso",
    ingredientes: "Sorvete de chocolate, leite, calda",
    valor_unitario: "1",
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
    valor: 21.9,
    valordesconto: 19.9,
  },
];

async function main() {
  for (const produto of produtos) {
    const existe = await prisma.produtos.findFirst({ where: { nome: produto.nome } });
    if (!existe) {
      await prisma.produtos.create({ data: produto });
    }
  }

  // usuário do restaurante (painel administrativo)
  const adminEmail = "admin@poucacarne.com";
  const admin = await prisma.usuarios.findFirst({ where: { email: adminEmail } });
  if (!admin) {
    await prisma.usuarios.create({
      data: {
        nome: "Administrador",
        telefone: "11999990000",
        email: adminEmail,
        senha: await hash("admin123", 10),
      },
    });
  }

  const restaurante = await prisma.restaurante.findFirst();
  if (!restaurante) {
    await prisma.restaurante.create({
      data: {
        nome: "Pouca Carne",
        telefone: "11999990000",
        email: "contato@poucacarne.com",
      },
    });
  }

  // cliente de demonstração, já com endereço (necessário para criar pedidos)
  const clienteEmail = "cliente@poucacarne.com";
  let cliente = await prisma.clientes.findFirst({ where: { email: clienteEmail } });
  if (!cliente) {
    cliente = await prisma.clientes.create({
      data: {
        nome: "Cliente Demo",
        email: clienteEmail,
        cpf: "12345678900",
        telefone: "11988887777",
        datanascimento: "1990-01-01",
        senha: await hash("cliente123", 10),
      },
    });
  }

  const endereco = await prisma.endereco.findFirst({ where: { id_cliente: cliente.id } });
  if (!endereco) {
    await prisma.endereco.create({
      data: {
        nome_rua: "Rua das Hamburguerias, 42",
        cep: "01001-000",
        id_cliente: cliente.id,
      },
    });
  }

  console.log("Seed concluído.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
