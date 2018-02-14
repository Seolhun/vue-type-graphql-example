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

export async function execute(request: string, variables?: { [key: string]: any }) {
  return graphql(schema, request, null, {}, variables);
}
