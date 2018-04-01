<template>
  <div class='row' v-cloak>
    <h2>User Detail</h2>
    <div class='col-sm-12'>
      <div class='form-group'>
        <label>{{ $tc('common.id') }} : </label>
        {{ user.id }}
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.email') }} : </label>
        {{ user.email }}
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.name') }} : </label>
        {{ user.name }}
      </div>
      <div class='form-group'>
        <label>{{ $tc('common.birth') }} : </label>
        {{ user.birth }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import gql from 'graphql-tag';

import { UserModel } from '../../../models';
import { ApolloResponse } from '../../../types';
import { BookModel } from '../../../../dist/src/model/index';
import { Book } from '../../../../../server/src/app/types';


@Component({
  apollo: {
    user() {
      return {
        query: gql`
          query {
            user(name: "${this.$route.params.name}") {
              id
              email
              name
              birth
            }
          }
        `,
        result(result: ApolloResponse) {
          if(!result.loading) {
            this.user = result.data.user;
          }
        },
        error(error) {
          console.log(error);
        },
        fetchPolicy: 'cache-and-network',
      };
    },
  }
})
export default class UserDetailView extends Vue {
  user = new UserModel();
}
</script>
