-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'Student');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "naissance" TEXT,
    "lieux" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'Student',
    "access" BOOLEAN DEFAULT false,
    "classe" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "urlPic" TEXT NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "urlPic" TEXT NOT NULL,
    "urlVideo" TEXT NOT NULL,
    "urlPowerPonit" TEXT NOT NULL,
    "periodId" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Period" ADD CONSTRAINT "Period_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE CASCADE ON UPDATE CASCADE;
