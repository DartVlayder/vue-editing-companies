<template>
   <div class="wrapper">
    <users-sorting></users-sorting>
    <div class="container">
      <div class="user">

        <div class="user__header">
        <div class="user__header--profile">
          Профиль пользователя
        </div>
        <div class="user__header--edit">
          <button class="btn">Редактировать</button>
        </div>
        </div>

        <form class="user__content">
          <div class="user__content__name">
            <span>Name</span>
            <input type="text" placeholder="Name">
          </div>
          <div class="user__content__name">
            <span>User name</span>
            <input type="text" placeholder="User name">
          </div>
          <div class="user__content__name">
            <span>E-mail</span>
            <input type="email" placeholder="E-mail">
          </div>
          <div class="user__content__name">
            <span>Street</span>
            <input type="text" placeholder="Street">
          </div>
          <div class="user__content__name">
            <span>City</span>
            <input type="text" placeholder="City">
          </div>
          <div class="user__content__name">
            <span>Zip code</span>
            <input type="text" placeholder="Zip code">
          </div>
          <div class="user__content__name">
            <span>Phone</span>
            <input type="tel" placeholder="Phone">
          </div>
          <div class="user__content__name">
            <span>Website</span>
            <input type="text" placeholder="Website">
          </div>
          <div class="user__content__name">
            <span>Comment</span>
            <textarea></textarea>
          </div>
        </form>
      </div>
    </div>
   </div>
</template>
<script>
import UsersSorting from '../components/UsersSorting.vue'
export default {
  components: {UsersSorting}
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.user {
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  input {
    border-radius: 5px;
    border: 1px solid #b9b9b9;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    align-items: center;
    &--profile {
      font-size: 20px;
    }
  }
  &__content{
    &__name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 7px;
      span {
        font-weight: bold;
      }
    }
  }
}
textarea {
  border-radius: 5px;
  resize: none;
  border: 1px solid #b9b9b9;
  width: 50%;
  min-height: 150px;
  padding: 5px;
}
.btn {
  color: #fff;
  background-color: #4B51EF;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #9093e7;
  }
}
@media (max-width: 425px) {
  .btn {
    padding: 5px;
  }
  textarea{
    width: 100%;
  }
  .user {
    padding: 5px;
    &__header--profile {
      font-size: 14px;
    }
  }
}
</style>