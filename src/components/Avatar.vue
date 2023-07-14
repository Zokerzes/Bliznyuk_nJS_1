<template>
  <avatar>
    <img src="../assets/img/avatar.jpg" alt="">
  </avatar>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "Avatar",
  components: {
  },
  data() {
  },
}
</script>

<style>
avatar {
  border: 1px solid black
}
</style>