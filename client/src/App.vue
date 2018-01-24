<template>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> TypeScript Setting 80% completed, except Vuex
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12'>
        <h2>Componenets</h2>
        <hello propMsg='Hello, TypeScript Vue'></hello>
        <hr>
        <h2>Router View</h2>
        <router-link class="navigation-link" tag="button" :to="'/'">Counter</router-link>
<<<<<<< HEAD
        <router-link class="navigation-link" tag="button" :to="'graphql'">GraphQL</router-link>
        <router-link class="navigation-link" tag="button" :to="'vue'">Vue Logo</router-link>
        <router-view/>
=======
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <input v-model="msg">
        <p>prop: {{propMessage}}</p>
        <p>msg: {{msg}}</p>
        <p>helloMsg: {{helloMsg}}</p>
        <p>computed msg: {{computedMsg}}</p>
        <button @click="greet">Greet</button>
>>>>>>> [graphql] - Arragned config and files
=======
        <router-link class="navigation-link" tag="button" :to="'vue'">Vue Logo</router-link>
        <router-view/>
>>>>>>> TypeScript Setting 80% completed, except Vuex
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

import Hello from "components/Hello.vue";

@Component({
  components: {
    Hello
  }
})
export default class App extends Vue {}
</script>
