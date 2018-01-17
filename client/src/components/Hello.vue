<template>
    <div>
      <h2>
        {{title}}
      </h2>
      <div class='greeting'>Hello {{ name }}</div>
      <div>
        {{ count }}
      </div>
      <button @click='decrement'>-</button>
      <button @click='increment'>+</button>
    </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  props: ["name"],
  data() {
    return {
      title: "Vue + TypeScript + GraphQL Example",
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count >= 1) {
        this.count--;
      }
    }
  },
  computed: {}
});
</script>

<style lang='scss'>
.greeting {
  margin: 20px;
  font-size: 20px;
}
</style>
