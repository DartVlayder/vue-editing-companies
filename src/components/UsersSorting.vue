<template>
  <div class="sorting">
    <div class="sorting__title">
      Сортировка
    </div>
    <button class="btn">По городам</button>
    <button class="btn">По компаниям</button>
  </div> 
</template>

<script>
</script>

<style scoped lang="scss">
.sorting {
  max-width: 170px;
  background-color: #BDBDBD;
  padding: 10px;
  &__title {
    margin-top: 30px;
    margin-bottom: 10px;
  }
}
.btn {
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #4B51EF;
  margin-bottom: 10px;
  color: #fff;
  &:hover {
    background-color: #6b6caf;
  }
}
</style>
