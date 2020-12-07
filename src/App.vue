<template>
  <v-app>
    <v-navigation-drawer
    v-model="adrawer"
    app>
      メニュー
    </v-navigation-drawer>
    <v-app-bar color="#0182D1" app>
      <v-app-bar-nav-icon @click.stop="adrawer = !adrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CREiST年末勉強会</v-toolbar-title>
    </v-app-bar>
    <v-main app>
      メイン
    </v-main>
    <v-footer app>
      フッター
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      adrawer: null
    }
  }
}
</script>
