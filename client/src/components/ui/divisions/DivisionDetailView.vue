<template>
  <div class="row" v-cloak>
    <h2>Division Detail</h2>
    <div class="col-sm-12">
      <div class="form-group">
        <label>{{ $tc('common.id') }} :</label>
        {{ division.id }}
      </div>
      <div class="form-group">
        <label>{{ $tc('common.name') }} :</label>
        {{ division.name }}
      </div>
      <div class="form-group">
        <label>{{ $tc('common.description') }} :</label>
        {{ division.description }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

import { DivisionModel } from "../../../models";
import { ApolloResponse } from "../../../types";

@Component({
  apollo: {
    division() {
      return {
        query: gql`
          query {
            division(name: "${this.$route.params.name}") {
              id
              name
              description
            }
          }
        `,
        result(result: ApolloResponse) {
          if (!result.loading) {
            this.division = result.data.division;
          }
        },
        fetchPolicy: "cache-and-network"
      };
    }
  }
})
export default class DivisionDetailView extends Vue {
  division = new DivisionModel();
}
</script>
