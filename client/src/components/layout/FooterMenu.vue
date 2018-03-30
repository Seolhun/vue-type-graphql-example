<template>
  <footer class='footer'>
    <div class='container padding-30'>
      <div class='row text-center'>
        <div class='col-sm-6 col-xs-12 footer-div'>
          <h4>Contact</h4>
          <div class='footer-list-div text-center'>
            <p>
              <a :href='githubUrl' target='_blank'>
                <span>
                <img
                  src='@/assets/images/logo/github/mark/PNG/GitHub-Mark-Light-32px.png'
                  alt='Responsive image'
                  class='padding-10'
                />
                  SeolHun GitHub
                </span>
              </a>
            </p>
            <p>
              <a :href='blogUrl' target='_blank'>
                <span>
                <img
                  src='@/assets/images/logo/github/mark/PNG/GitHub-Mark-Light-32px.png'
                  alt='Responsive image'
                  class='padding-10'
                />
                  SeolHun Blog
                </span>
              </a>
            </p>
          </div>
        </div>
        <div class='col-sm-6 col-xs-12 footer-div'>
          <h4>Products</h4>
          <div class='footer-list-div'>
            <p>
              <router-link :to='"/users"' class='navigation-link'>Users</router-link>
            </p>
            <p>
              <router-link :to='"/divisions"' class='navigation-link'>Divisions</router-link>
            </p>
            <p>
              <router-link :to='"/books"' class='navigation-link'>Books</router-link>
            </p>
            <p>
              <a :href='blogUrl' target='_blank'>
                <span>
                  Contact
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class FooterMenu extends Vue {
  githubUrl = 'https://github.com/seolhun';
  blogUrl = 'http://seolhun.github.io/';
  // blogUrl = 'http://postitforhooney.tistory.com/';
}
</script>

<style lang='scss' scoped>
@import 'FooterMenu';

</style>


