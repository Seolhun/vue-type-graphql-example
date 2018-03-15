<template>
  <div class='row margin-20'>
    <div class='col-sm-12'>
      <h2>Log-In</h2>
    </div>
    <div class='col-sm-12'>
      <div class='form-group'>
        <label>Email</label>
        <input type='email' class='form-control' v-model='user.email'>
        <span> {{ validation.email ? validation.email : '' }} </span>
      </div>
      <div class='form-group'>
        <label>Password</label>
        <input type='password' class='form-control' v-model='user.password'>
        <span> {{ validation.password ? validation.password : '' }} </span>
      </div>
    </div>
    <div class='col-sm-12'>
      <div class='form-group'>
        <button class='btn-lg btn-primary' v-on:click="signIn($event)">Log-In</button>
        <button class='btn-lg btn-info'>Sign-In</button>
      </div>
    </div>
    <div class='col-sm-12'>
      <h5>회원이 아니신가요? 지금 <router-link :to='"/signin"' tag='a' activeClass='active'>회원가입</router-link>하세요.</h5>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class LoginView extends Vue {
  user = {
    email: '',
    password: '',
  }

  validation = {
    email: '',
    password: '',
  }
}
</script>
