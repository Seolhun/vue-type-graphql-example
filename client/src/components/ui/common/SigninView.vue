<template>
  <div class='row margin-20'>
    <div class='col-sm-12'>
      <h2>Sign-In</h2>
    </div>
    <div class='col-sm-12'>
      <div class='form-group'>
        <label>Email</label>
        <input type='email' class='form-control' v-model='user.email'>
        <span class='error-msg'> {{ validation.email ? validation.email : '' }} </span>
      </div>
      <div class='form-group'>
        <label>Name</label>
        <input class='form-control' v-model='user.name'>
        <span class='error-msg'> {{ validation.name ? validation.name : '' }} </span>
      </div>
      <div class='form-group'>
        <label>Password</label>
        <input type='password' class='form-control' v-model='user.password'>
        <span class='error-msg'> {{ validation.password ? validation.password : '' }} </span>
      </div>
      <div class='form-group'>
        <label for='confirmPassword'>Confirm-Password</label>
        <input type='password' class='form-control' id='confirmPassword' v-model='user.confirm_password'>
        <span class='error-msg'> {{ validation.confirm_password ? validation.confirm_password : '' }} </span>
      </div>
    </div>
    <div class='col-sm-12'>
      <button class='btn-lg btn-primary' v-on:click='($event) => signIn($event)'>Sign-In</button>
      <button class='btn-lg btn-danger' v-on:click='() => cancel()' >Cancel</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import * as _ from 'lodash';
import * as validator from 'validator';

import { Validators, ValidationResponse } from '../../../utils/Validators';

@Component
export default class SigninView extends Vue {
  user = {
    email: '',
    name: '',
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
  }

  cancel() {
    this.$router.go(-1);
  }

  private validateUser() {
    if (!validator.isEmail(this.user.email)) {
      this.validation.email = 'Email is In-valid'
    } else {
      this.validation.email = ''
    }

    const name_validation = Validators.isName(this.user.name)
    if (!name_validation.result) {
      this.validation.name = name_validation.msg
    } else {
      this.validation.name = ''
    }

    const pwd_validation = Validators.isPassword(this.user.password)
    if (!pwd_validation.result) {
      this.validation.password = pwd_validation.msg
    } else {
      this.validation.password = ''
    }

    const confirm_pwd_validation = Validators.isPassword(this.user.confirm_password)
    if (!confirm_pwd_validation.result) {
      this.validation.confirm_password = confirm_pwd_validation.msg
    } else {
      this.validation.confirm_password = ''
    }

    if(_.values(this.validation).map(() => true)) {
      this.active = true;
    }
  }
}
</script>


<style lang='sass' scoped>
  @import 'SigninView'
</style>

