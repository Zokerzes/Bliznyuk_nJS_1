<template>
  Страница пользователя
  <Avatar />
  <Info />
  <News />
</template>

<script>
import Avatar from "@/components/Avatar.vue"
import Info from "@/components/UserInfo.vue"
import News from "@/components/News.vue"
export default {
  name: "User",
  components: {
    Avatar,
    Info,
    News,
  },
  data() {
  },
}

</script>


