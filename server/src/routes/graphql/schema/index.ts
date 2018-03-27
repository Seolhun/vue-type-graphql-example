import { graphql, GraphQLSchema, printSchema } from 'graphql';
import mutation from '../mutation';
import query from '../query';

export function getSchemaString() {
  return printSchema(schema);
}

export async function execute(request: string, variables?: { [key: string]: any }) {
  return graphql(schema, request, null, {}, variables);
}

const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
