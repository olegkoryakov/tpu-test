<template>
  <header class="header">
    <div class="header__logo">
       <img src="@/assets/img/tpu-logo.svg" alt="TPU" class="header__logo-img">
    </div>
    <nav class="header__nav">
      <ul
        class="header__nav-list"
        v-for="(option, index) in langs.options"
        :key="index"
      >
        <li class="header__nav-item">
          <button
            :class="`header__language-switch
              ${ option === langs.current
                ? 'header__language-switch_active' : ''}`"
            type="button"
            @click="onSwitchLanguageClick"
          >
            {{option}}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['langs']),
  methods: {
    ...mapActions(['setCurrentLanguage']),
    onSwitchLanguageClick(e) {
      const { textContent } = e.target;
      const lang = textContent.trim();
      this.setCurrentLanguage(lang);
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import './Header.styl'
</style>
