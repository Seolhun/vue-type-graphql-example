<template>
  <div>
      <h2>
        {{title}}
      </h2>
      <div>
        {{ counts }}
      </div>
      <button @click='decrement'>-</button>
      <button @click='increment'>+</button>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Counter extends Vue {
  title = "World Component";
  counts = 0;

  // lifecycle hook
  updated() {}
  beforeUpdate() {}

  // computed
  get computedMsg() {
    return this.title;
  }

  // method
  increment() {
    this.counts++;
  }

  decrement() {
    this.counts--;
  }
}
</script>
