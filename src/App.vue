<template>
  <v-app>
    <v-navigation-drawer
    v-model="drawer"
    app>
      メニュー
    </v-navigation-drawer>
    <v-app-bar color="#0182D1" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CREiST年末勉強会</v-toolbar-title>
      <v-spacer/>
      <v-menu offset-y>
      <template v-slot:activator="{on}">
      <v-btn v-on="on" color="#9182D9">会社紹介</v-btn>
      </template>
      <v-list>
        <v-subheader>ヘルプ</v-subheader>
        <v-list-item v-for="menu_item in company_menu"
        :key="menu_item">
          <v-list-item-content>
            <v-list-item-title>{{ menu_item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
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
      drawer: null,
      company_menu: [
        '会社紹介',
        '沿革',
        '連絡先'
      ]
    }
  }
}
</script>
