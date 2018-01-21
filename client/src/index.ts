
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import App from './App.vue';
import HelloComponent from './components/Hello.vue';

Vue.use(BootstrapVue);

const v = new Vue({
  el: '#app',
  template: `
    <div>
        <hello-component name='SeolHun'/>
        <app propMessage='ssss' />
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent,
    App,
  },
});
