<template>
  <div>
    <h4>{{propMsg}}</h4>
    <hr>
    <h4>Data</h4>
    <p>{{helloMsg}}</p>
    <p>{{msg}}</p>
    <input v-model="msg">
    <hr>
    <h4>Computed</h4>
    <p>{{computedMsg}}</p>
    <hr>
    <h4>Method</h4>
    <button @click="greet">Greet</button>
    <button @click="hello">hello</button>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    propMsg: String
  }
})
export default class Hello extends Vue {
  // initial data
  msg = "TypeScript Vue";
  helloMsg = `Hello, ${this.msg}`;

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
  console() {
    console.log("Hello, Console");
  }

  greet() {
    alert("greeting: " + this.msg);
  }

  hello() {
    alert("hello: " + this.msg);
  }
}
</script>
