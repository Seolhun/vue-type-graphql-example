<template>
  <div>
    <img src='@/assets/images/logo/logo.png'>
    <h1>Graphql with Apollo</h1>
    <div>
      <input
        v-model='inputEmail'
        class="form-control"
      >
      <p>inputEmail : {{ inputEmail }}</p>
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
    user() {
      return {
        query: gql`
          query ($email: String!) {
            user(email: $email) {
              id
              email
              name
              birth
            }
          }
        `,
        variables() {
          return {
            email: this.inputEmail,
          }
        },
        result(result) {
          this.user = result.data.user;
        },
        // fetchPolicy: "cache-and-network"
      };
    }
  }
})
export default class Graphql extends Vue {
  inputEmail = 'shun10114@gmail.com';
  user = new UserModel();
}
</script>
