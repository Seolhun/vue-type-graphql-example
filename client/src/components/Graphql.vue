<template>
  <div>
    <img src='@/assets/logo.png'>
    <h1>Graphql with Apollo</h1>
    <div class="apollo">
      <h3>Users</h3>
      <input
        v-model="userId"
        placeholder="User ID"
      />
      <hr>
      <h2>Users</h2>
      <ul v-for='user in users' v-bind:key='user'>
        <li>
          {{ user.id }}
        </li>
        <li>
          {{ user.name }}
        </li>
        <li>
          {{ user.age }}
        </li>
      </ul>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

class User {
  id: string;
  name: string;
  age: number;
  constructor() {
    this.id = "";
    this.name = "";
    this.age = 0;
  }
}

@Component({
  apollo: {
    users() {
      return {
        query: gql`
          query users {
            users {
              id
              name
              age
            }
          }
        `,
        result(result) {
          this.users = result.data.users;
        },
        fetchPolicy: "cache-and-network"
      };
    }
    // user() {
    //   return {
    //     query: gql`
    //       query user ($id: String!) {
    //         user (id: $id) {
    //           id
    //           name
    //         }
    //       }
    //     }`,
    //     variables() {
    //       return {
    //         id: this.userId
    //       };
    //     },
    //     result(result) {
    //       this.user = result.data;
    //     },
    //     fetchPolicy: "cache-and-network"
    //   };
    // }
  }
})
export default class Graphql extends Vue {
  userId: string = "";
  users = [];
}
</script>
