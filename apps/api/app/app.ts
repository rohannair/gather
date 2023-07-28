import 'dotenv/config'

import { fastify } from 'fastify'
import autoload from '@fastify/autoload'
import { join } from 'node:path'

import { plugin as graphqlPlugin } from './modules/graphql/plugin'

const envToLogger: Record<string, any> = {
  development: {
    transport: {
      level: 'debug',
      target: 'pino-pretty',
      options: {
        translateTime: 'SYS:h:MM:ss',
        colorize: true,
        ignore: 'pid,hostname',
      },
    },
    production: 'trace',
  },
}
// eslint-disable-next-line turbo/no-undeclared-env-vars
const env = process.env.NODE_ENV || 'development'

export const app = fastify({
  logger: envToLogger[env],
})

app.get('/', async (_request, _reply) => {
  return { hello: 'world' }
})

app.register(autoload, {
  dir: join(__dirname, 'modules'),
  dirNameRoutePrefix: false,
  options: { prefix: '/api/v1' },
})
app.register(graphqlPlugin)
