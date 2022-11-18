import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users/count", async () => {
    const count = await prisma.user.count();

    return { count };
  });
}
