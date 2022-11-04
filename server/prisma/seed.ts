import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      avatarUrl: "https://github.com/FilipiMachado.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "BOL321",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-08T12:00:00.315Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-06T14:00:00.315Z",
      firstTeamCountryCode: "US",
      secondTeamCountryCode: "DE",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 4,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });

  /* const participant = await prisma.participant.create({
    data: {
      poolId: pool.id,
      userId: user.id
    }
  }) */
}

main();
