<template>
  <div class='row' v-cloak>
    <div class='col-sm-12'>
      <div class='apollo'>
        <h3>Books</h3>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Email
              </th>
              <th>
                Writer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='book in books' v-bind:key='book.id'>
              <td>
                {{ book.id }}
              </td>
              <td>
                {{ book.name }}
              </td>
              <td>
                {{ book.writer }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import { BookModel } from '../../../models';
import { ApolloResponse } from '../../../types';

@Component({
  apollo: {
    books() {
      return {
        query: gql`
          query {
            books {
              id
              name
              writer
            }
          }
        `,
        result(result: ApolloResponse) {
          if(!result.loading) {
            this.books = result.data.books;
          }
        },
        fetchPolicy: 'cache-and-network',
      };
    }
  }
})
export default class BooksView extends Vue {
  books:BookModel[] = [];

}
</script>
