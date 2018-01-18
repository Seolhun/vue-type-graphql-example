import logger from 'common/logger';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as session from 'express-session';
import { PORT } from './config';
import schema from './services/graphql/schema';

const app = express();
// CORS 설정
app.use(cors());
// JSON
app.use(bodyParser.json());
// Session
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'hunseol_typescript_graphql',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

// GraphQLå
app.use('/graphql', graphqlHTTP(async (request) => {
  const startTime = Date.now();
  return {
    schema,
    graphiql: process.env.NODE_ENV !== 'production',
    extensions({ document, variables, operationName, result }) {
      return { result: bodyParser.json(result), variables, operationName, runTime: Date.now() - startTime };
    },
  };
}));

// Port Setting
app.listen(PORT.EXPRESS_PORT, () => {
  console.log(`Listening the server ${PORT.EXPRESS_PORT}`);
}).on('error', (err) => {
  console.error(err);
});
