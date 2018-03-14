<template>
  <div class='row'>
    <div class='col-sm-12'>
    <div>
      <input
        v-model='inputEmail'
        class='form-control'
      >
      <p>inputEmail : {{ inputEmail }}</p>
    </div>
  </div>
  <div class='row'>
    <div class='apollo col-sm-12'>
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
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import { UserModel } from '../../model';

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
        // fetchPolicy: 'cache-and-network'
      };
    }
  }
})
class UserDetail extends Vue {
  inputEmail = 'shun10114@gmail.com';
  user = new UserModel();
}

export default UserDetail;
</script>
