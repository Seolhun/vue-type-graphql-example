<template>
  <div class='row margin-20'>
    <h2>Log-In</h2>
    <div class='col-sm-12'>
      <form>
        <div class='form-group'>
          <label>{{ $tc('common.email') }}</label>
          <input type='email' autocomplete='email' class='form-control' v-model='user.email'>
        </div>
        <div class='form-group'>
          <label>{{ $tc('common.password') }}</label>
          <input type='password' autocomplete='current-password' class='form-control' v-model='user.password'>
        </div>
        <div class='form-group'>
          <button class='btn-lg btn-primary' v-on:click='($event) => login($event)'>{{ $tc('common.form.confirm') }}</button>
          <button class='btn-lg btn-danger' v-on:click='() => cancel()' >{{ $tc('common.cancel') }}</button>
        </div>
      </form>
    </div>
    <div class='col-sm-12'>
      <h5>{{ $tc('login.message.not_user1') }}<router-link :to='"/signin"' tag='a' activeClass='active'> {{ $tc('signin.this') }} </router-link>{{ $tc('login.message.not_user2') }}</h5>
      <p>
        <button class='btn btn-signup btn-github' type='submit'>
          <div>
            <svg id='logo-github' class='ic-white w-74 h-18 vertical-align-middle'>
              <use
                xmlns:xlink='http://www.w3.org/1999/xlink'
                xlink:href='/assets/svg-defs-566cafd494d5be85c34825cffe847009be965c6a3ba55ed9a7a8b99bbeca0aea.svg#ic-GitHub-56'>
              </use>
            </svg>
          </div>
        </button>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
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
          loginUser(name: '${user.email}', email: '${user.email}', password: '${user.password}') {
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
