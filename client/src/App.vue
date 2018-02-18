<template>
  <div>
    <header-menu/>

    <div class='container'>
      <div class='row'>
        <div class='col-sm-12'>
          <router-view/>
        </div>
      </div>
    </div>
    <!-- <footer-menu/> -->
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import HeaderMenu from "@/components/ui/layout/HeaderMenu.vue";
import FooterMenu from "@/components/ui/layout/FooterMenu.vue";

@Component({
  components: {
    HeaderMenu
    // FooterMenu
  }
})
export default class App extends Vue {
  // // computed
  // get computedMsg () {
  //   return 'computed ' + this.msg
  // }

  // // method
  // greet () {
  //   alert('greeting: ' + this.msg)
  //   this.$refs.helloComponent.sayHello()
  // }

  // Lifecycle hook
  beforecreate() {
    console.log("BeforeCreate In App Vue");
  }
  beforeMount() {
    console.log("BeforeMount In App Vue");
  }
  mounted() {
    console.log("Mounted In App Vue");
  }
  create() {
    console.log("Create In App Vue");
  }
  beforeUpdate() {
    console.log("BeforeUpdate In App Vue");
  }
  updated() {
    console.log("Updated In App Vue");
  }
  beforeDestroy() {
    console.log("BeforeDestroy In App Vue");
  }
  destroyed() {
    console.log("Destroyed In App Vue");
  }
}
</script>

<style lang="sass">
  @import "assets/scss/app"
</style>
