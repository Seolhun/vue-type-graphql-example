<template>
  <div>
    <img src='@/assets/images/logo/logo.png'>
    <h2>Hello, I'm SeolHun. Web Developer</h2>
    <div>{{ $tc('common.nation') }} : {{ $tc('common.korea') }}</div>
    <small>This is built by Node, TypeScript, GraphQL to make a example to test for Company.</small>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {}
</script>
