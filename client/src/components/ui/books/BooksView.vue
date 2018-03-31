<template>
  <div class='row' v-cloak>
    <div class='col-sm-12'>
      <div class='apollo'>
        <h3>Books</h3>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th>
                {{ $tc('common.id')}}
              </th>
              <th>
                {{ $tc('common.name')}}
              </th>
              <th>
                {{ $tc('book.writer')}}
              </th>
              <th>
                {{ $tc('common.status')}}
              </th>
              <th>
                {{ $tc('common.description')}}
              </th>
            </tr>
          </thead>
          <tbody>
            <router-link
              tag='tr'
              activeClass='active'
              v-for='book in books' v-bind:key='book.id'
              :to='`/books/${book.id}`'
            >
              <td>
                {{ book.id }}
              </td>
              <td>
                {{ book.name }}
              </td>
              <td>
                {{ book.writer }}
              </td>
              <td>
                {{ book.status }}
              </td>
              <td>
                {{ book.description }}
              </td>
            </router-link>
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
              status
              description
            }
          }
        `,
        result(result: ApolloResponse) {
          if(!result.loading) {
            this.books = result.data.books;
          }
        },
        // pollInterval: 300, // Continuouse call function ms
        fetchPolicy: 'cache-and-network'
      };
    },
  }
})
export default class BooksView extends Vue {
  books:BookModel[] = [];
}
</script>
