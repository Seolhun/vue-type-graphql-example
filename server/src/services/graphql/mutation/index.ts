import axios from 'axios';
import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLID, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { API_SERVER } from '../../../config';
import { DivisionType, UserType } from '../type/index';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        age: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        registered_date: { type: GraphQLString },
        divisionId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { age, name, divisionId, registered_date }) {
        return axios.post(`${API_SERVER.JSON_SERVER}/users`, {
          age,
          name,
          divisionId,
          registered_date,
        }).then((res) => res.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios.delete(`${API_SERVER.JSON_SERVER}/users/${id}`)
          .then((res) => res.data);
      },
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        age: { type: GraphQLInt },
        name: { type: GraphQLString },
        divisionId: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios.patch(`${API_SERVER.JSON_SERVER}/users/${args.id}`, args)
          .then((res) => res.data);
      },
    },
  },
});

export default mutation;
