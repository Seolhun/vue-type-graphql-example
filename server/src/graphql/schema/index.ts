import { graphql, GraphQLSchema, printSchema } from 'graphql';
import query from '../query';

const schema = new GraphQLSchema(
  {
    query,
  }
);
export default schema;

export function getSchemaString() {
  return printSchema(schema);
}
