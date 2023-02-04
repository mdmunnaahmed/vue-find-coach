<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
/* 
.route-enter-active {
  transition: all 0.5s;
}
.route-leave-active {
  transition: all 0.5s;
}
.route-leave-to {
  opacity: 0.1;
  transform: translateX(50px);
}
.route-enter-from {
  opacity: 0.1;
  transform: translateX(-50px);
}

.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateX(0px);
} */
</style>