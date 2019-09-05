<template>
  <div class="row" v-cloak>
    <h2>Books</h2>
    <div class="col-sm-12">
      <div class="apollo">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>{{ $tc('common.id')}}</th>
              <th>{{ $tc('common.name')}}</th>
              <th>{{ $tc('book.author')}}</th>
              <th>{{ $tc('common.status')}}</th>
              <th>{{ $tc('common.description')}}</th>
            </tr>
          </thead>
          <tbody>
            <router-link
              tag="tr"
              activeClass="active"
              v-for="book in books"
              v-bind:key="book.id"
              :to="`/books/${book.id}`"
            >
              <td>{{ book.id }}</td>
              <td>{{ book.name }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.status }}</td>
              <td>{{ book.description }}</td>
            </router-link>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

import { BookModel } from "../../../models";
import { ApolloResponse } from "../../../types";

@Component({
  apollo: {
    books() {
      return {
        query: gql`
          query {
            books {
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
            this.books = result.data.books;
          }
        },
        // pollInterval: 300, // Continuouse call function ms
        fetchPolicy: "cache-and-network"
      };
    }
  }
})
export default class BooksView extends Vue {
  books: BookModel[] = [];
}
</script>
