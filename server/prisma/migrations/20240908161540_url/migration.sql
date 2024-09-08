/*
  Warnings:

  - Added the required column `urlPic` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPic` to the `Period` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "urlPic" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Period" ADD COLUMN     "urlPic" TEXT NOT NULL;
