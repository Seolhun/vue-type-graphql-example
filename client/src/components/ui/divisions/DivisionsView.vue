<template>
  <div class='row'>
    <div class='col-sm-12'>
      <div class='apollo'>
        <h3>Divisions</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='division in divisions' v-bind:key='division.id'>
              <td>
                {{ division.id }}
              </td>
              <td>
                {{ division.email }}
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

import { DivisionModel } from '../../../model';

@Component
export default class DivisionsView extends Vue {
  divisions:DivisionModel[] = [];
}
</script>
