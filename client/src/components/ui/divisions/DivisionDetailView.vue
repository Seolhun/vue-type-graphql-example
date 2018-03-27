<template>
  <div class='row'>
    <div class='col-sm-12'>
      <h3>Division Detail</h3>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import { DivisionModel } from '../../../models';
import { ApolloResponse } from '../../../types';

@Component
export default class DivisionDetailView extends Vue {

}
</script>
