<template>
  <div class="list__item">
    <div class="left">
      <div class="left__name">
        <div class="left__name--title mr-5">
          ФИО:    
        </div>  
        <div class="left__name__user">
          {{name}}
        </div>
      </div>
      <div class="left__name">
        <div class="left__name--title mr-5">
            Город:
        </div>
        <div class="left__name__user">
            {{city}}
        </div>
      </div>
      <div class="left__name">
        <div class="left__name--title mr-5">
            Компания:
        </div>
        <div class="left__name__user">
            {{company}}
        </div>
      </div>
    </div>
    <button class="right" @click="openUser">
        Подробнее
    </button>
  </div>
</template>
<script>
export default {
  props: ['name', 'city', 'company', 'id'],
  emits: ['openUser'],
  methods: {
    openUser() {
      this.$emit('openUser', this.id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .list__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
  }
  .left {
    &__name {
      display: flex;
      &--title {
        color: #A3A3A3;
      }
      &__user {
        font-weight: bold;
      }
    }
  }
  .right {
    color: #4B51EF;
  }
  .mr-5 {
    margin-right: 10px;
  }
@media (max-width: 768px) {
  .list__item {
    flex-direction: column;
    align-items: flex-start;
  }
  .left {
    margin-bottom: 7px;
  }
}
</style>