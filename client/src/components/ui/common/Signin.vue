<template>
  <div>
    <img src='@/assets/images/logo/logo.png'>
    <h2>Sign-In</h2>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

@Component({
  apollo: {
    ping: {
      query: gql`
        query user($message: String!) {
          ping(message: $message)
        }
      `,
      variables: {
        message: "Meow"
      }
    }
  }
})
export default class Signin extends Vue {
  users = [];
}
</script>
