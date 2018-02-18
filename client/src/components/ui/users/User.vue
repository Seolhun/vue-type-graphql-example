<template>
  <div>
    <img src='@/assets/images/logo/logo.png'>
    <h1>Graphql with Apollo</h1>
    <div>
      <input
        v-model='inputEmail'
        class="form-control"
      >
      <p>param : {{ email }}</p>
    </div>
    <div class="apollo">
      <h2>User</h2>
      <div>
        {{ user.id }}
      </div>
      <div>
        {{ user.email }}
      </div>
      <div>
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

import { UserModel } from "../../model";
@Component({
  apollo: {
    user: {
      query: gql`
        query user($email: String!) {
          user(email: $email)
        }
      `,
      // Static parameters
      variables() {
        return {
            email: this.email,
        }
      },
    },
  },
})
export default class Graphql extends Vue {
  inputEmail = 'shun10114@gmail.com';
  user = {};
}
</script>
