<template>
  <div class="wrapper">
    <user-sorting></user-sorting>
    <div class="container">
      <div class="list">
        <div class="list__title">
          Список пользователей
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import UserSorting from '../components/UsersSorting.vue'
export default {
  components: {UserSorting}
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.container {
  margin: 20px 0 0 35px;
}
.list {
  &__title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
