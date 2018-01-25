import logger from 'common/logger';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

export const app = express();

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/debug.log', level: 'debug' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// GraphQL
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

// Port Setting
app.listen(PORT.EXPRESS_PORT, () => {
  console.log(`Listening the server ${PORT.EXPRESS_PORT}`);
}).on('error', (err) => {
  console.error(err);
});
