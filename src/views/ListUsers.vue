<template>
  <div class="wrapper">
    <user-sorting
      @sortingSity="sortingSity"
      @sortingCompany="sortingCompany"
    ></user-sorting>
    <div class="container">
      <div class="list">
        <div class="list__title">
          Список пользователей
        </div>
      </div>
      <div class="loader" v-if="this.loading === true">
        <CirclesLoader />
      </div>
      <UserInfo 
        v-else
        v-for="(item, index) in items[0]" 
        :key="index"
        :name="item.name"
        :city="item.address.city"
        :company="item.company.name"
        @moreDetailed="moreDetailed(index)"
      />
      <div class="footer" v-if="items[0] !== undefined">
        <div class="footer__users">
          Найдено {{ items[0].length }} пользователей
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import CirclesLoader from '../components/CirclesLoader.vue'
import UserSorting from '../components/UsersSorting.vue'
import UserInfo from '../components/UserInfo.vue'
import {useRouter} from 'vue-router'
export default {
  components: {UserSorting, UserInfo,CirclesLoader},
  data() {
    return {
      items: this.$store.getters.GET_ITEMS,
      loading: false,
      router: useRouter(),
    }
  },
  methods: {
    moreDetailed(index) {
      this.router.push(`/UserProfile/${index}`)
    },
    requestServer() {
      this.loading = true
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setResult(data)
        })
    },
    setResult(data) {
      this.items.push(data)
      this.loading = false
    },
    sortingCompany() {
      this.items[0].sort((x, y) => x.company.name.localeCompare(y.company.name))
    },
    sortingSity() {
      this.items[0].sort((x, y) => x.address.city.localeCompare(y.address.city))
    },
  },
  mounted() {
    this.requestServer()
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.container {
  padding: 20px 35px 0 35px;
}
.list {
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 26px;
  }
}
.footer {
  font-weight: bold;
  &__users {
    display: flex;
    justify-content: flex-end;
  }
}
@media (max-width: 425px) {
  .container {
    padding: 5px;
  }
}
</style>
