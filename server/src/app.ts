import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as session from 'express-session';
import * as helmet from 'helmet';

import { Config } from './config';
import { sequelize } from './config/database';
import schema from './routes/graphql/schema';

import { auth_router } from './routes/auth/Authentication';

const env = Config.setConfiguration();

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');
// Session
const expiryDate = new Date(Date.now() + 1000 * 60 * 30); // 30 min
app.use(session({
  secret: 'hunseol_typescript_graphql',
  name: 'sessionId',
  resave: false,
  saveUninitialized: true,
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    expires: expiryDate,
  },
}));
app.set('trust proxy', 1);

// GraphQL
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

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/auth', auth_router);

// sequelize.sync({ force: true });
sequelize.sync();
sequelize.authenticate().then(() => {
  console.log('Sequelize Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

app.listen(env.EXPRESS_PORT, () => {
  console.log(`Listening the server ${env.EXPRESS_PORT}`);
}).on('error', (err) => {
  console.error(err);
});
