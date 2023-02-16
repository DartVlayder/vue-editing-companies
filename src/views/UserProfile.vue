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
              v-model="name"
              :readonly="this.read"
            > 
            <small v-if="errors.name">{{ errors.name }}</small>
          </div>
          <div class="user__content__name">
            <span>User name</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="User name"
              v-model="username"
              :readonly="this.read">
            <small v-if="errors.username">{{ errors.username }}</small>
          </div>
          <div class="user__content__name">
            <span>E-mail</span>
            <input type="email" 
              required
              :class="{readonly: read}"
              placeholder="E-mail"
              v-model="email"
              :readonly="this.read"
              >
            <small v-if="errors.email">{{ errors.email }}</small>
          </div>
          <div class="user__content__name">
            <span>Street</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="Street"
              v-model="street"
              :readonly="this.read">
            <small v-if="errors.street">{{ errors.street }}</small>
          </div>
          <div class="user__content__name">
            <span>City</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="City"
              v-model="city"
              :readonly="this.read">
            <small v-if="errors.city">{{ errors.city }}</small>
          </div>
          <div class="user__content__name">
            <span>Zip code</span>
            <input type="text" 
              required
              :class="{readonly: read}"
              placeholder="Zip code"
              v-model="zipcode"
              :readonly="this.read">
            <small v-if="errors.zipcode">{{ errors.zipcode }}</small>
          </div>
          <div class="user__content__name">
            <span>Phone</span>
            <input type="tel" 
              required
              :class="{readonly: read}"
              placeholder="Phone"
              v-model="phone"
              :readonly="this.read">
            <small v-if="errors.phone">{{ errors.phone }}</small>
          </div>
          <div class="user__content__name">
            <span>Website</span>
            <input type="text"  
              :class="{readonly: read}"
              placeholder="Website"
              v-model="website"
              :readonly="this.read">
            <small v-if="errors.website">{{ errors.website }}</small>
          </div>
          <div class="user__content__name">
            <span>Comment</span>
            <textarea></textarea>
          </div>
        </form>

        <div class="user__footer">
          <div class="user__footer--edit">
              <input type="submit" 
                class="btn"
                @click="submit" 
                :class="{none: this.read}"
              >
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
      read: true,
      name: '',
      username: '',
      email: '',
      street: '',
      city: '',
      zipcode: '',
      phone: '',
      website: '',
      errors: {
        name: null,
        username: null,
        email: null,
        street: null,
        city: null,
        zipcode: null,
        phone: null,
        website: null,
      }
    }
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.getIdItems(this.page)
    }
  },
  mounted () {
    this.name = this.doneTodosCount.name
    this.username = this.doneTodosCount.username
    this.email = this.doneTodosCount.email
    this.street = this.doneTodosCount.address.street
    this.city = this.doneTodosCount.address.city
    this.zipcode = this.doneTodosCount.address.zipcode
    this.phone = this.doneTodosCount.phone
    this.website = this.doneTodosCount.website
  },
  methods: {
    editProfile() {
      this.read = false
    },
    submit() {
      let isValid = true
      if (this.name.length === 0
        ) {
        this.errors.name = 'Введите ваше имя'
        isValid = false
      } else {
        this.errors.name = null
      }
      if (this.username.length === 0
        ) {
        this.errors.username = 'Введите имя пользователя'
        isValid = false
      } else {
        this.errors.username = null
      }
      if (this.email.length === 0
        ) {
        this.errors.email = 'Введите ваш email'
        isValid = false
      } else {
        this.errors.email = null
      }
      if (this.street.length === 0
        ) {
        this.errors.street = 'Введите улицу'
        isValid = false
      } else {
        this.errors.street = null
      }
      if (this.city.length === 0
        ) {
        this.errors.city = 'Введите город'
        isValid = false
      } else {
        this.errors.city = null
      }
      if (this.zipcode.length === 0
        ) {
        this.errors.zipcode = 'Введите ваш zipcode'
        isValid = false
      } else {
        this.errors.zipcode = null
      }
      if (this.phone.length === 0
        ) {
        this.errors.phone = 'Введите ваш телефон'
        isValid = false
      } else {
        this.errors.phone = null
      }
      if (this.website.length === 0
        ) {
        this.errors.website = 'Введите ваш сайт'
        isValid = false
      } else {
        this.errors.website = null
      }
      return isValid
    }
  },
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
form small {
  color: red;
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