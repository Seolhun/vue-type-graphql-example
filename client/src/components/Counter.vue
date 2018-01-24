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

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Counter extends Vue {
  title = "World Component";
  counts = 0;

  // lifecycle hook
  updated() {}
  beforeUpdate() {}
  mounted() {
    this.console();
  }

  // computed
  get computedMsg() {
    return this.msg;
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
