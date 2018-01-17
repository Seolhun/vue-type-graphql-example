
import Vue from 'vue';
import App from './App.vue';
import HelloComponent from './components/Hello.vue';

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
