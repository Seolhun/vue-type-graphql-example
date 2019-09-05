<template>
  <div class="row" v-cloak>
    <h2>Book Detail</h2>
    <div class="col-sm-12">
      <div class="form-group">
        <label>{{ $tc("common.id") }} :</label>
        {{ book.id }}
      </div>
      <div class="form-group">
        <label>{{ $tc("common.name") }} :</label>
        {{ book.name }}
      </div>
      <div class="form-group">
        <label>{{ $tc("book.author") }} :</label>
        {{ book.author }}
      </div>
      <div class="form-group">
        <label>{{ $tc("common.status") }} :</label>
        {{ book.status }}
      </div>
      <div class="form-group">
        <label>{{ $tc("common.description") }} :</label>
        {{ book.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

import { BookModel } from "../../../models";
import { ApolloResponse } from "../../../types";

@Component({
  apollo: {
    book() {
      return {
        query: gql`
          query {
            book(id: ${this.$route.params.id}) {
              id
              name
              author
              status
              description
            }
          }
        `,
        result(result: ApolloResponse) {
          if (!result.loading) {
            this.book = result.data.book;
          }
        },
        fetchPolicy: "cache-and-network"
      };
    }
  }
})
export default class BookDetailView extends Vue {
  book: BookModel = new BookModel();
}
</script>
