import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));
const port = 4000;
app.listen(port, () => {
  console.log('Listening the server ' + port);
}).on('error', (err) => {

  console.error(err);
});
