<template>
  <div id="app">
    <div class="container">
      <h3>Test Task</h3>
      <div class="wrap">
        <div id="nav">
          <router-link to="/" class="wrap__link">Component: BaseSelect</router-link>
          <router-link to="/tooltip" class="wrap__link">Component: BaseTooltip</router-link>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('GetUsers');
  },
}
</script>
<style lang="scss">
@import "assets/styles/common/variables";
@import "~bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Rubik:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Rubik:wght@400;500&display=swap');

body {
  font-family: 'Rubik', sans-serif;
}

#app {
  margin: 52px auto;
}

.wrap {
  border: 1px solid $color-white-gray;
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0, 44, 92, 0.1);
  border-radius: 2px;
  margin-top: 14px;
  padding: 30px 40px;
  @media (max-width: 576px) {
    padding: 20px;
  }

  &__link {
    color: $color-gray;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-decoration: none;
    margin-right: 36px;

    &:last-child {
      margin-right: 0;
    }
  }

  .router-link-exact-active {
    color: $base-color;
  }
}

#nav {
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;

  a {
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
}
</style>
