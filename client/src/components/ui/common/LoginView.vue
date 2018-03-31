<template>
  <div class='row margin-20'>
    <div class='col-sm-12'>
      <h2>Log-In</h2>
    </div>
    <div class='col-sm-12'>
      <div class='form-group'>
        <label>{{ $tc('common.email') }}</label>
        <input type='email' class='form-control' v-model='user.email'>
        <span> {{ validation.email ? validation.email : '' }} </span>
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.password') }}</label>
        <input type='password' class='form-control' v-model='user.password'>
        <span> {{ validation.password ? validation.password : '' }} </span>
      </div>
    </div>
    <div class='col-sm-12'>
      <div class='form-group'>
        <button class='btn-lg btn-primary' v-on:click='() => login($event)'>{{ $tc('common.form.confirm') }}</button>
        <button class='btn-lg btn-danger' v-on:click='() => cancel()' >{{ $tc('common.cancel') }}</button>
      </div>
    </div>
    <div class='col-sm-12'>
      <h5>{{ $tc('login.message.not_user1') }}<router-link :to='"/signin"' tag='a' activeClass='active'> {{ $tc('signin.this') }} </router-link>{{ $tc('login.message.not_user2') }}</h5>
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

  login(event: Event) {
    event.preventDefault();
  }

  cancel() {
    this.$router.go(-1);
  }
}
</script>
