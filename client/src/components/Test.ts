import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('src/index.html'),
})
export class FeatureComponent extends Vue {
  constructor() {
    super();
  }

  mounted() { }
}
