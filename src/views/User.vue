<template>
  Страница пользователя
  <Avatar />
  <Info />
</template>

<script>
import Avatar from "@/components/Avatar.vue"
import Info from "@/components/UserInfo.vue"
export default {
  name: "User",
  components: {
    Avatar,
    Info,
  },
  data() {
  },
}

</script>


