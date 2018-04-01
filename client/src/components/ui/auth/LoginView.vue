<template>
  <div class='row margin-20'>
    <h2>Log-In</h2>
    <div class='col-sm-12'>
      <form>
        <div class='form-group'>
          <label>{{ $tc('common.email') }}</label>
          <input type='email' class='form-control' v-model='user.email'>
        </div>
        <div class='form-group'>
          <label>{{ $tc('common.password') }}</label>
          <input type='password' class='form-control' v-model='user.password'>
        </div>
        <div class='form-group'>
          <button class='btn-lg btn-primary' v-on:click='($event) => login($event)'>{{ $tc('common.form.confirm') }}</button>
          <button class='btn-lg btn-danger' v-on:click='() => cancel()' >{{ $tc('common.cancel') }}</button>
        </div>
      </form>
    </div>
    <div class='col-sm-12'>
      <h5>{{ $tc('login.message.not_user1') }}<router-link :to='"/signin"' tag='a' activeClass='active'> {{ $tc('signin.this') }} </router-link>{{ $tc('login.message.not_user2') }}</h5>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { request } from 'graphql-request'
import gql from 'graphql-tag';

import { ApolloResponse } from '../../../types';
import { UserModel } from '../../../models';

@Component
export default class LoginView extends Vue {
  user = {
    email: 'shun10114@google.com',
    password: '1234',
  }

  login(event: Event) {
    event.preventDefault();
    const user = this.user;
    this.$apollo.mutate({
      mutation: gql`
        mutation  {
          loginUser(name: "${user.email}", email: "${user.email}", password: "${user.password}") {
            id
            email
            name
          }
        }
      `,
    }).then((result: ApolloResponse) => {
      const db_user: UserModel = result.data.loginUser;
      if(db_user) {
        console.log('Lgoin Success');
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  cancel() {
    this.$router.go(-1);
  }
}
</script>
