<template>
  <b-navbar
    class='background-ocean shadow-box'
    toggleable='md'
    type='dark'
    fixed='top'
  >
    <div class='container'>
      <b-navbar-toggle target='nav_collapse'>
      </b-navbar-toggle>

      <b-navbar-brand
        tag='route-link'
        :to='"/"'
      >
        Hi-Cord
      </b-navbar-brand>
      <b-collapse is-nav id='nav_collapse'>
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag='li' activeClass='active' :to='"/users"'>Users</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag='li' activeClass='active' :to='"/divisions"'>Divisions</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag='li' activeClass='active' :to='"/books"'>Books</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-form>
            <div
              class='form-inline'
            >
              <b-form-input size='md' class='mr-sm-2' type='text' placeholder='Search'>
              </b-form-input>
              <button
                size='md'
                class='btn-gray'
                type='button'
              >
                Search
              </button>
            </div>
          </b-nav-form>
          <b-nav-item-dropdown
            text='Lang'
            right
          >
            <b-dropdown-item @click='changeLanguage("ko")'>한국어</b-dropdown-item>
            <b-dropdown-item @click='changeLanguage("en")'>English</b-dropdown-item>
            <b-dropdown-item @click='changeLanguage("ja")'>日本語</b-dropdown-item>
            <b-dropdown-item @click='changeLanguage("ch")'>中文</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            class='header-navigation-link'
            right
          >
            <template slot='button-content'>
              <em>Options</em>
            </template>
            <b-dropdown-item v-show='this.isLogin'>
              <router-link tag='li' activeClass='active' :to='"/profile"'>Profile</router-link>
            </b-dropdown-item>
            <b-dropdown-item v-show='!this.isLogin'>
              <router-link tag='li' activeClass='active' :to='"/login"'>Log-In</router-link>
            </b-dropdown-item>
            <b-dropdown-item v-show='!this.isLogin'>
              <router-link tag='li' activeClass='active' :to='"/signin"'>Sign-In</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HeaderMenu extends Vue {
  isLogin = false;

  changeLanguage(locale: string) {
    this.$i18n.locale = locale;
  }
}
</script>

<style lang='scss' scoped>
@import 'HeaderMenu';

</style>



