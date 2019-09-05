<template>
  <div class="row" v-cloak>
    <div class="col-sm-12">
      <div class="text-center">
        <img src="@/assets/images/logo/logo.png" />
        <div>
          <h2>
            Hello, I'm
            <a href="https://github.com/seolhun" target="_blank">SeolHun</a>.
            Web Developer
          </h2>
        </div>
        <p>This is built by NodeJS, TypeScript, GraphQL, Vue.</p>
        <p>The Admin SPA Project to manage employees and book in company.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HomeView extends Vue {}
</script>

<style lang="scss"></style>
