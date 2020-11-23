<template>
  <header class="header">
    <div class="header__logo">
       <img src="@/assets/img/tpu-logo.svg" alt="TPU" class="header__logo-img">
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <button
            class="header__language-switch header__language-switch_active"
            type="button"
          >
            Ru
          </button>
        </li>
        <li class="header__nav-item">
          <button class="header__language-switch" type="button">En</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
  .header {
    display flex
    justify-content space-between
    padding 80px 20px 0
    box-sizing border-box
    width: 100%;

    &__logo {
      margin-left 100px
      width 432px
    }

    &__logo-img {
      width 100%
    }

    &__nav {
    }

    &__nav-list {
      list-style none
      margin 0
      padding 0
    }

    &__language-switch {
      cursor pointer
      padding 0
      margin 0
      width 38px
      height 38px
      font-family inherit
      text-transform uppercase
      color primaryColor
      background-color transparent
      border 1px solid primaryColor
      border-radius 50%
      margin-bottom 20px
      &_active {
        border-color secondaryColor
        background-color secondaryColor
      }
      &:focus {
        outline none
      }
    }
  }

  @media screen and (max-width mediumBreakpoint) {
    .header {
      padding 80px 0 0
      justify-content center
      &__logo {
        padding 0 80px
        margin-left 0
      }
      &__nav {
        position absolute
        top 80px
        right 20px
      }
    }
  }

  @media screen and (max-width minBreakpoint) {
    .header {
      &__logo {
        width 304px
      }
    }
  }
</style>
