import Fastify from "fastify";
import cors from "@fastify/cors";
import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { pollRoutes } from "./routes/poll";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.register(pollRoutes);
  fastify.register(authRoutes);
  fastify.register(gameRoutes);
  fastify.register(guessRoutes);
  fastify.register(userRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
