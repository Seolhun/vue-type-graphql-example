<template>
  <div class='row' v-cloak>
    <h2>Divisions</h2>
    <div class='col-sm-12'>
      <div class='apollo'>
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
                {{ $tc('common.description')}}
              </th>
            </tr>
          </thead>
          <tbody>
            <router-link
              tag='tr'
              activeClass='active'
              v-for='division in divisions' v-bind:key='division.name'
              :to='`/divisions/${division.name}`'
            >
              <td>
                {{ division.id }}
              </td>
              <td>
                {{ division.name }}
              </td>
              <td>
                {{ division.description }}
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
    },
  },
})
export default class DivisionsView extends Vue {
  divisions:DivisionModel[] = [];
}
</script>
