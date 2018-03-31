<template>
  <div class='row margin-20'>
    <div class='col-sm-12'>
      <h2>Sign-In</h2>
    </div>
    <div class='col-sm-12'>
      <div class='form-group'>
        <label>{{ $tc('common.email') }}</label>
        <input type='email' class='form-control' v-model='user.email' v-on:input='this.validateEmail'>
        <span class='error-msg'> {{ validation.email ? validation.email : '' }} </span>
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.name') }}</label>
        <input class='form-control' v-model='user.name' v-on:input='this.validateName'>
        <span class='error-msg'> {{ validation.name ? validation.name : '' }} </span>
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.birth') }}</label>
        <input type='date' class='form-control' v-model='user.birth'>
      </div>
      <div class='form-group'>
        <label>{{ $tc('division.this') }}</label>
        <div>
          <select v-model="user.division_id">
            <optgroup label="Choose">
              <option
                v-for="division in divisions"
                v-bind:key="division.id"
                v-bind:value="division.id"
              >
                {{ division.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.password') }}</label>
        <input type='password' class='form-control' v-model='user.password' v-on:input='this.validatePwd'>
        <span class='error-msg'> {{ validation.password ? validation.password : '' }} </span>
      </div>
      <div class='form-group'>
        <label for='confirmPassword'>{{ $tc('common.confirm_password') }}</label>
        <input type='password' class='form-control' id='confirmPassword' v-model='user.confirm_password' v-on:input='this.validateConfirmPwd'>
        <span class='error-msg'> {{ validation.confirm_password ? validation.confirm_password : '' }} </span>
      </div>
    </div>
    <div class='col-sm-12'>
      <button class='btn-lg btn-primary' v-on:click='($event) => signIn($event)'>{{ $tc('common.form.confirm') }}</button>
      <button class='btn-lg btn-danger' v-on:click='() => cancel()' >{{ $tc('common.cancel') }}</button>
    </div>
    <p>
      {{ user }}
    </p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import * as _ from 'lodash';

import { Validators, ValidationResponse } from '../../../utils/Validators';

import { ApolloResponse } from '../../../types';

@Component({
  apollo: {
    divisions() {
      return {
        query: gql`
          query {
            divisions {
              id
              name
              description
            }
          }
        `,
        result(result: ApolloResponse) {
          if(!result.loading) {
            this.divisions = result.data.divisions;
          }
        },
        fetchPolicy: 'cache-and-network',
      };
    }
  }
})
export default class SigninView extends Vue {
  divisions = [];
  user = {
    email: '',
    name: '',
    birth: '',
    division_id: '',
    password: '',
    confirm_password: '',
  }
  validation = {
    email: '',
    name: '',
    password: '',
    confirm_password: '',
  }
  active:boolean = false;

  signIn(event: Event) {
    event.preventDefault();
    this.validateUser();

    if (!this.active) {
      return;
    }
    this.$apollo.mutate({
      mutation: gql`mutation ($name: String!, $email: String!, $password: String!, $birth: String!, $division_id: Integer!) {
        addUser(name: $name, email: $email, password: $password, birth: $birth, division_id: $division_id) {
          id
          email
          name
        }
      }`,
      variables: {
        email: this.user.email,
        name: this.user.name,
        password: this.user.password,
        confirm_password: this.user.confirm_password,
        birth: this.user.birth,
        division_id: this.user.division_id,
      },
    });
  }

  cancel() {
    this.$router.go(-1);
  }

  validateUser() {
    this.validateEmail();
    if(this.validation.email) {
      return;
    }
    this.validateName();
    if(this.validation.name) {
      return;
    }
    this.validatePwd();
    if(this.validation.password) {
      return;
    }
    this.validateConfirmPwd();
    if(this.validation.confirm_password) {
      return;
    }
    if(!this.user.division_id) {
      return;
    }
    if(!this.user.birth) {
      return;
    }
    this.active = true;
  }

private validateEmail(): void {
    const email_validation = Validators.isEmail(this.user.password);
    if (!email_validation.result) {
      this.validation.email = email_validation.msg;
    } else {
      this.validation.email = '';
    }
  }

  private validateName(): void {
    const name_validation = Validators.isName(this.user.name);
    if (!name_validation.result) {
      this.validation.name = name_validation.msg;
    } else {
      this.validation.name = '';
    }
  }

  private validatePwd(): void {
    const pwd_validation = Validators.isPassword(this.user.password);
    if (!pwd_validation.result) {
      this.validation.password = pwd_validation.msg;
    } else {
      this.validation.password = '';
    }
  }

  private validateConfirmPwd(): void {
    const confirm_pwd_validation = Validators.isPassword(this.user.confirm_password)
    if (!confirm_pwd_validation.result) {
      this.validation.confirm_password = confirm_pwd_validation.msg
    } else {
      this.validation.confirm_password = ''
    }
  }
}
</script>


<style lang='scss' scoped>
@import 'SigninView';

</style>

