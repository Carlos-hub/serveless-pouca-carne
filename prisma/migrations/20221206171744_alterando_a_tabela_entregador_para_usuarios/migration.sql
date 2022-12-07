/*
  Warnings:

  - You are about to drop the `entregador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "entregador";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);
