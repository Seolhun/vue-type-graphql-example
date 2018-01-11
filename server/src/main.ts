import * as express from 'express';
import * as expressGraphQL from 'express-graphql';

const app = express();
app.use('/graphql', expressGraphQL({
  graphiql: true,
}));

const port = 4000;
app.listen(port, () => {
  console.log('Listening the server ' + port);
});
