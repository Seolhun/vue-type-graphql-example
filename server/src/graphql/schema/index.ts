import { graphql, GraphQLSchema, printSchema } from 'graphql';
import mutation from '../mutation';
import query from '../query';

const schema = new GraphQLSchema(
  {
    query,
    mutation,
  },
);
export default schema;

export function getSchemaString() {
  return printSchema(schema);
}

console.log('===== schema =====');
console.log(getSchemaString());
console.log('=================');
