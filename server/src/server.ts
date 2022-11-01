import Fastify from "fastify";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });
}

bootstrap();
