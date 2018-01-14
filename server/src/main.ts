import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import UserSchema from './schema/schema';

const app = express();
app.use('/graphql', expressGraphQL({
    schema: UserSchema,
    graphiql: true,
}));

const port = 4000;
app.listen(port, () => {
  console.log('Listening the server ' + port);
});
