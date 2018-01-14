// import * as seolhun from '@seolhun/typescript-example/src/common';
import CallAndApply from './example/method/call&apply/test';
const callAndApply = new CallAndApply();
callAndApply.run();

import Spread from './example/method/spread/test';
const spread = new Spread();
spread.run();

// src/index.ts

import Vue from 'vue';
import HelloComponent from './components/Hello.vue';

const v = new Vue({
  el: '#app',
  template: `
    <div>
        Name: <input v-model='name' type='text'>
        <hello-component :name='name' :initialEnthusiasm='5' />
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent,
  },
});
