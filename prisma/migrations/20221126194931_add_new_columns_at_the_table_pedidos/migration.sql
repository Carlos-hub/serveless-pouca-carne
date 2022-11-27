/*
  Warnings:

  - Added the required column `end_at` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "end_at" TIMESTAMP(3) NOT NULL;
