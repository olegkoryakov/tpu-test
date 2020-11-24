<template>
  <section class="gallery">
    <p class="gallery__slogan">{{text[langs.current].slogan}}</p>
    <Hooper
      class="gallery__hooper"
      :wheelControl="false"
    >
      <Slide
        v-for="({ url, alt }, index) in galleryItems"
        :key="index"
      >
        <GalleryItem
          class="gallery__item"
          :imgUrl="url"
          :imgAlt="alt"
        />
      </Slide>>
      <Pagination slot="hooper-addons"></Pagination>
      <Navigation slot="hooper-addons"></Navigation>
    </Hooper>
  </section>
</template>

<script>
import GalleryItem from '@/components/GalleryItem/GalleryItem.vue';
import {
  Hooper,
  Slide,
  Pagination,
  Navigation,
} from 'hooper';
import '@/stylus/hooper.styl';
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['galleryItems', 'text', 'langs']),
  components: {
    Hooper,
    Pagination,
    Navigation,
    Slide,
    GalleryItem,
  },
};
</script>

<style lang="stylus" scoped>
  @import './Gallery.styl'
</style>
