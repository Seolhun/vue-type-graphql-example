
import Vue from 'vue';
import HelloComponent from './components/Hello.vue';

const v = new Vue({
  el: '#app',
  template: `
    <div>
        <hello-component name='SeolHun'/>
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent,
  },
});
