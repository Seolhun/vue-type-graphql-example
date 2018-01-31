<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12'>
        <h2>Router View</h2>
        <router-link class="btn btn-success" tag="button" :to="'/'">Home</router-link>
        <router-link class="btn btn-info" tag="button" :to="'graphql'">GraphQL</router-link>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {}
</script>
