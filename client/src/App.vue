<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12'>
        <h2>Componenets</h2>
        <hello propMsg='Hello, TypeScript Vue'></hello>
        <hr>
        <h2>Router View</h2>
        <router-link class="navigation-link" tag="button" :to="'/'">Counter</router-link>
        <router-view/>
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
