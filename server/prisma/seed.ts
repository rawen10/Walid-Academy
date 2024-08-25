import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        nom: 'mzoughi',
        prenom: 'firas',
        email: 'firas@gmail.com',
        password: 'firas',
        classe: '9',
        naissance: '2005-05-10',
        lieux: 'tunis',
        role: 'Student',
      },
      {
        nom: 'soltani',
        prenom: 'rawen',
        email: 'rawen@gmail.com',
        password: 'rawen',
        classe: '8',
        naissance: '2002-09-10',
        lieux: 'tunis',
        role: 'Student',
      },
      {
        nom: 'soltani',
        prenom: 'rawen',
        email: 'rawen1@gmail.com',
        password: 'rawen',
        role: 'Admin',
      },
    ],
  });

  const subjects = [
    { name: 'Math' },
    { name: 'Science' }
  ];

  for (const subjectData of subjects) {
    const subject = await prisma.subject.create({
      data: {
        name: subjectData.name,
        periods: {
          create: Array.from({ length: 6 }).map((_, periodIndex) => ({
            name: `Période ${periodIndex + 1}`,
            lessons: {
              create: Array.from({ length: 8 }).map((_, lessonIndex) => ({
                title: `Leçon ${lessonIndex + 1}`,
                content: `Contenu de la leçon ${lessonIndex + 1} de la Période ${periodIndex + 1} pour ${subjectData.name}`,
              })),
            },
          })),
        },
      },
    });

    console.log(`Matière créée: ${subject.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
