/*
  Warnings:

  - Added the required column `cpf` to the `entregador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entregador" ADD COLUMN     "cpf" TEXT NOT NULL;
