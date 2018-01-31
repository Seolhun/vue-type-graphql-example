<template>
  <div>
    <img src='@/assets/logo.png'>
    <h1>Hello, I'm SeolHun. Web Developer</h1>
    <small>This is Node, TypeScript, GraphQL Example To show study hisotry</small>
    <div>
      <a :href=url target='_blank'>Git Hub</a>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Hello extends Vue {
  url = "https://github.com/seolhun";
}
</script>
