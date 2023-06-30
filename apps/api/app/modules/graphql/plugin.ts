import { createYoga } from "graphql-yoga";
import type {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
  FastifyPluginAsync,
} from "fastify";

export const plugin: FastifyPluginAsync = async (app: FastifyInstance) => {
  const yoga = createYoga<{
    req: FastifyRequest;
    reply: FastifyReply;
  }>({
    logging: {
      debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
      info: (...args) => args.forEach((arg) => app.log.info(arg)),
      warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
      error: (...args) => args.forEach((arg) => app.log.error(arg)),
    },
  });

  app.addContentTypeParser("multipart/form-data", {}, (_req, _payload, done) =>
    done(null)
  );

  app.route({
    url: yoga.graphqlEndpoint,
    method: ["GET", "POST", "OPTIONS"],
    handler: async (req, reply) => {
      const response = await yoga.handleNodeRequest(req, {
        req,
        reply,
      });

      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });

      return reply.status(response.status).send(response.body);
    },
  });
};
