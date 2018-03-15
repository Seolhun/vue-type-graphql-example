<template>
  <div>
    <img src='@/assets/images/logo/logo2.png'>
    <div>
      <h2>Hello, I'm SeolHun<a href='https://github.com/seolhun' target='_blank'>(Github)</a>. Web Developer</h2>

    </div>
    <span>This is built by NodeJS, TypeScript, GraphQL, Vue to make a example to share for Company.</span>
    <div>{{ $tc('common.nation') }} : {{ $tc('common.korea') }}</div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {}
</script>
