<template>
  <div class="head">
    Новости пользователя
  </div>
  <div class="text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto quisquam doloribus laudantium, repudiandae
    aperiam cum exercitationem ipsam ad eius. Aliquid, dolorem tempore neque nam iste laudantium iure omnis quis!
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "News",
  components: {
  },
  data() {
  },
}
</script>

<style>
.head {
  text-decoration-line: underline;
}

.text {
  width: 20%;
}
</style>