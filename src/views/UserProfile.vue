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
          <button class="btn" @click="editProfile">Редактировать</button>
        </div>
        </div>

       <form class="user__content">
          <div class="user__content__name">
            <span>Name</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="Name"
              :value="doneTodosCount.name"
              :readonly="this.read"
            > 
          </div>
          <div class="user__content__name">
            <span>User name</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="User name"
              :value="doneTodosCount.username"
              :readonly="this.read">
          </div>
          <div class="user__content__name">
            <span>E-mail</span>
            <input type="email" 
              required
              :class="{readonly: read}"
              placeholder="E-mail"
              :value="doneTodosCount.email"
              :readonly="this.read"
              >
          </div>
          <div class="user__content__name">
            <span>Street</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="Street"
              :value="doneTodosCount.address.street"
              :readonly="this.read">
          </div>
          <div class="user__content__name">
            <span>City</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="City"
              :value="doneTodosCount.address.city"
              :readonly="this.read">
          </div>
          <div class="user__content__name">
            <span>Zip code</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="Zip code"
              :value="doneTodosCount.address.zipcode"
              :readonly="this.read">
          </div>
          <div class="user__content__name">
            <span>Phone</span>
            <input type="tel" 
              required
              :class="{readonly: read}"
              placeholder="Phone"
              :value="doneTodosCount.phone"
              :readonly="this.read">
          </div>
          <div class="user__content__name">
            <span>Website</span>
            <input type="text"  
              :class="{readonly: read}"
              placeholder="Website"
              :value="doneTodosCount.website"
              :readonly="this.read">
          </div>
          <div class="user__content__name">
            <span>Comment</span>
            <textarea></textarea>
          </div>
        </form>

        <div class="user__footer">
        <div class="user__footer--edit">
          <button class="btn" 
            @click="submit" 
            :class="{none: this.read}"
          >Отправить</button>
        </div>
        </div>

      </div>
    </div>
   </div>
</template>
<script>
import UsersSorting from '../components/UsersSorting.vue'
export default {
  components: {UsersSorting},
  data() {
    return {
      page: this.$route.params.id,
      read: true
    }
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.getIdItems(this.page)
    }
  },
  methods: {
    editProfile() {
      this.read = false
    },
    submit() {
      if (this.read === false) {
        console.log('submit');
      }
    }
  }
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
  &__footer--edit {
    display: flex;
    justify-content: flex-end;
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
.readonly {
  color: #b8b8b8;
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
.none {
  background-color: grey;
  cursor: default;
  &:hover {
    background-color: grey;
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