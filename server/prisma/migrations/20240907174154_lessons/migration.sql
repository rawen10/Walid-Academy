/*
  Warnings:

  - You are about to drop the column `content` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `classeId` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `classeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Classe` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `urlPowerPonit` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlVideo` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_classeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_classeId_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "content",
ADD COLUMN     "urlPowerPonit" TEXT NOT NULL,
ADD COLUMN     "urlVideo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "classeId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "classeId",
ADD COLUMN     "classe" TEXT;

-- DropTable
DROP TABLE "Classe";

-- DropEnum
DROP TYPE "ClasseLevel";
