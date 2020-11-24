<template>
  <div class="gallery-item"
    :style="{'background-image': `url(${imgUrl})`}"
    :alt="imgAlt"
  >
    <div class="gallery-item__overlay"></div>
  </div>
</template>

<script>

export default {
  props: {
    imgUrl: String,
    imgAlt: String,
  },
};
</script>

<style lang="stylus" scoped>
  @import './GalleryItem.styl'
</style>
