/*
  Warnings:

  - You are about to drop the column `classe` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ClasseLevel" AS ENUM ('Quatrieme', 'Cinquieme', 'Sixeme');

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "classeId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "classe",
ADD COLUMN     "classeId" INTEGER;

-- CreateTable
CREATE TABLE "Classe" (
    "id" SERIAL NOT NULL,
    "name" "ClasseLevel" NOT NULL,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
