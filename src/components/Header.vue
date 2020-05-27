<template>
  <div id="app">
    <header>
      <template v-if='isAuthenticated'>
        <router-link to='/' class='header-item'>NEWS</router-link>
        <router-link to='../components/CheatPark' class='header-item'>BLOG</router-link>
        <router-link to='../components/CompanyDetail' class='header-item'>COMPANY</router-link>
        <router-link to='/' class='header-item'>SERVICE</router-link>
        <router-link to='/' class='header-item'>WORKS</router-link>
        <router-link to='/' class='header-item'>RECRUIT</router-link>
        <router-link to='/' class='header-item'>ACCESS</router-link>
        <router-link to='../components/Contact' class='header-item'>CONTACT</router-link>
        <span class='header-item' @click='logout'>ログアウト</span>
      </template>
      <template v-if='!isAuthenticated'>
        <router-link to='/login' class='header-item'>ログイン</router-link>
        <router-link to='/register' class='header-item'>登録</router-link>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style>
header {
  padding-top: 20px;
  text-align: right;
  position: relative;
  /* background-color: transparent; */
}
body {
  margin: 0;
}
.header-item {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
</style>
<style scoped>
#app {
  margin-top: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
