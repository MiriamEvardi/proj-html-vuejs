<script >

import {store} from './store.js'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  data() {
    return {
      store
    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}

</script>

<template>

 <AppHeader></AppHeader>
 <AppMain></AppMain>
 <AppFooter></AppFooter>

</template>

<style lang="scss">
@use './style.scss';

</style>
