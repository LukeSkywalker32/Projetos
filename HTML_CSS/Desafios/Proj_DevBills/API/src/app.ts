import Fastify from "fastify";
import type { FastifyInstance } from "fastify";
import routes from "./routes";

const app: FastifyInstance = Fastify({
  logger: true,
});

app.register(routes, { prefix: "/api"});

export default app;
