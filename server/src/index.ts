
import logger from 'common/logger';
import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

export const app = express();

// GraphQL
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

// Port Setting
const port = 4000;
app.listen(port, () => {
  console.log('Listening the server ' + port);
}).on('error', (err) => {
  console.error(err);
});
