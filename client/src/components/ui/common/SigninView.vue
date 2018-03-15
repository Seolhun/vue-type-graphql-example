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
        <input type='password' class='form-control' id='confirmPassword' v-model='user.confirmPassword'>
        <span class='error-msg'> {{ validation.password ? validation.password : '' }} </span>
      </div>
    </div>
    <div>
      <button class='btn-lg btn-primary' v-on:click='($event) => signIn($event)'>Sign-In</button>
      <button class='btn-lg btn-danger' v-on:click='() => cancel()' >Cancel</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import * as validator from 'validator';

import Validatos from '../../../utils/Validators';

@Component
export default class SigninView extends Vue {
  user = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  }
  validation = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  }
  active: false;

  beforeUpdate() {
    console.log(this.validation);
    console.log(this.user);
  }

  signIn(event: Event) {
    this.validateUser();
    event.preventDefault();
  }

  cancel() {
    this.$router.go(-1);
  }

  private validateUser() {
    if(!validator.isEmail(this.user.email)) {
      this.validation.email = 'Email is In-valid'
    } else {
      this.validation.email = ''
    }

    const validatos = new Validatos();
    const name_validation = validatos.isPassword(this.user.password)
    if(!name_validation.result) {
      this.validation.email = name_validation.msg
    } else {
      this.validation.email = ''
    }

    const pwd_validation = validatos.isPassword(this.user.password)
    if(!pwd_validation.result) {
      this.validation.email = pwd_validation.msg
    } else {
      this.validation.email = ''
    }
  }
}
</script>


<style lang='sass' scoped>
  @import 'SigninView'
</style>

