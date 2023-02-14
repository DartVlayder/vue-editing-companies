<template>
  <div class="sorting">
    <div class="sorting__title">
      Сортировка
    </div>
    <button class="btn" @click="sortingSity">По городам</button>
    <button class="btn" @click="sortingCompany">По компаниям</button>
  </div> 
</template>

<script>
export default {
  emits: ['sortingSity', 'sortingCompany'],
  methods: {
    sortingSity() {
      this.$emit('sortingSity')
    },
    sortingCompany() {
      this.$emit('sortingCompany')
    }
  }
}
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
  width: 100%;
  &:hover {
    background-color: #6b6caf;
  }
}
@media (max-width: 425px) {
  .btn {
    padding: 4px;
    font-size: 12px;
  }
}
</style>
