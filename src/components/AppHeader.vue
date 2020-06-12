<template>
  <v-app>
    <!-- ここにヘッダーをコーディング -->
    <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
         <v-tabs>
          <!-- <v-tab
          > -->
          <a v-bind="top">TOP</a>
          <a v-bind="blog">BLOG</a>
          <a v-bind="news">NEWS</a>
          <a v-bind="company">COMPANY</a>
          <a v-bind="service">SERVICE</a>
          <a v-bind="recruit">RECRUIT</a>
          <a v-bind="access">ACCESS</a>
          <!-- </v-tab> -->
        </v-tabs>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <!-- <v-list-item-group>
            <v-list-item
                > -->
                  <a v-bind="top">TOP</a>
                  <a v-bind="blog">BLOG</a>
                  <a v-bind="news">NEWS</a>
                  <a v-bind="company">COMPANY</a>
                  <a v-bind="service">SERVICE</a>
                  <a v-bind="recruit">RECRUIT</a>
                  <a v-bind="access">ACCESS</a>
            <!-- </v-list-item>
          </v-list-item-group> -->
        </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>
 
<script>
export default {
  data () {
    return {
      drawer: false,
      top: {
        href: "#top"
      },
      blog: {
        href: "#blog"
      },
      news: {
        href: "#news"
      },
      company: {
        href: "#company"
      },
      service: {
        href: "#service"
      },
      recruit: {
        href: "#recruit"
      },
      access: {
        href: "#access"
      }
    }
  }
}
</script>
 
<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
.v-list {
  a {
    display: block;
    padding: 20px 0;
    color: #000;
  }
}
.v-tabs {
  line-height: 4;
  a {
    display: inline-block;
    padding: 0 20px;
    color: #fff;
  }
}
</style>
