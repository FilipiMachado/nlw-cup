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

  const poll = await prisma.poll.create({
    data: {
      title: "Example Poll",
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
              userId_pollId: {
                userId: user.id,
                pollId: poll.id,
              },
            },
          },
        },
      },
    },
  });

  /* const participant = await prisma.participant.create({
    data: {
      pollId: poll.id,
      userId: user.id
    }
  }) */
}

main();
