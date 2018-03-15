<template>
  <div class='row'>
    <div class='col-sm-12'>
      <div class='apollo'>
        <h3>Books</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Email
              </th>
              <th>
                Name
              </th>
              <th>
                Birth
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='book in books' v-bind:key='book.id'>
              <td>
                {{ book.id }}
              </td>
              <td>
                {{ book.email }}
              </td>
              <td>
                {{ book.name }}
              </td>
              <td>
                {{ book.birth }}
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

import { BookModel } from '../../model';

@Component
export default class Books extends Vue {
  books = [];

}
</script>
