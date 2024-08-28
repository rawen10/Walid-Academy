-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_periodId_fkey";

-- DropForeignKey
ALTER TABLE "Period" DROP CONSTRAINT "Period_subjectId_fkey";

-- AddForeignKey
ALTER TABLE "Period" ADD CONSTRAINT "Period_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE CASCADE ON UPDATE CASCADE;
