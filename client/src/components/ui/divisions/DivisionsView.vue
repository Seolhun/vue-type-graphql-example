<template>
  <div class='row' v-cloak>
    <div class='col-sm-12'>
      <div class='apollo'>
        <h3>Divisions</h3>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='division in divisions' v-bind:key='division.id'>
              <td>
                {{ division.id }}
              </td>
              <td>
                {{ division.name }}
              </td>
              <td>
                {{ division.description }}
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

import { DivisionModel } from '../../../models';
import { ApolloResponse } from '../../../types';

@Component({
  apollo: {
    divisions() {
      return {
        query: gql`
          query {
            divisions {
              id
              name
              description
            }
          }
        `,
        result(result: ApolloResponse) {
          if(!result.loading) {
            this.divisions = result.data.divisions;
          }
        },
        fetchPolicy: 'cache-and-network',
      };
    }
  }
})
export default class DivisionsView extends Vue {
  divisions:DivisionModel[] = [];
}
</script>
