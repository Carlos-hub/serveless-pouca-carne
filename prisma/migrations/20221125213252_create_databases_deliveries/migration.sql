-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "cod_pedido" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "cliente_numero" TEXT NOT NULL,
    "id_cliente_endereco" INTEGER NOT NULL,
    "cliente_endereco" TEXT NOT NULL,
    "forma_pagamento" TEXT NOT NULL,
    "telefone_entregador" INTEGER NOT NULL,
    "nome_entregador" TEXT NOT NULL,
    "id_entregador" INTEGER NOT NULL,
    "produtosId" INTEGER NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "valor_unitario" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Entregador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "nome_rua" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_id_key" ON "Clientes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_id_key" ON "Produtos"("id");

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
