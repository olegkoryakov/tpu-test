<template>
  <div class="app">
    <div class="app__screen">
      <div class="app__header">
        <Header />
      </div>
      <div class="app__gallery">
        <Gallery />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Gallery from '@/components/Gallery/Gallery.vue';

export default {
  name: 'App',
  components: {
    Gallery,
    Header,
  },
};
</script>

<style lang="stylus">
  @import './App.styl'
</style>
