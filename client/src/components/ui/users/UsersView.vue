<template>
  <div class='row' v-cloak>
    <div class='col-sm-12'>
      <div class='apollo'>
        <h3>Users</h3>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Email
              </th>
              <th>
                Name
              </th>
              <th>
                Birth
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='user in users' v-bind:key='user.id'>
              <td>
                {{ user.id }}
              </td>
              <td>
                {{ user.email }}
              </td>
              <td>
                {{ user.name }}
              </td>
              <td>
                {{ user.birth }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import { UserModel } from '../../../models';
import { ApolloResponse } from '../../../types';

@Component({
  apollo: {
    users() {
      return {
        query: gql`
          query {
            users {
              id
              email
              name
              birth
            }
          }
        `,
        result(result: ApolloResponse) {
          if(!result.loading) {
            this.users = result.data.users;
          }
        },
        fetchPolicy: 'cache-and-network',
      };
    }
  }
})
export default class UsersView extends Vue {
  users: UserModel[] = [];
}
</script>
