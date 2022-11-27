/*
  Warnings:

  - Added the required column `valor` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
