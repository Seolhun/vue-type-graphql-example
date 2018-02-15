import logger from 'common/logger';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as session from 'express-session';

import { PORT } from './config';
import { sequelize } from './repositories/database';
import schema from './services/graphql/schema';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({
  secret: 'hunseol_typescript_graphql',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

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

sequelize.sync({ force: true });
sequelize.authenticate().then(() => {
  console.log('Sequelize Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

app.listen(PORT.EXPRESS_PORT, () => {
  console.log(`Listening the server ${PORT.EXPRESS_PORT}`);
}).on('error', (err) => {
  console.error(err);
});
