<template>
  <v-app>
    <v-navigation-drawer
    v-model="drawer"
    app cliped
    >
      <v-container>
        <v-list-item>
      メニュー
        </v-list-item>
        <v-divider/>
        <v-list dense nav>
          <v-list-item v-for="main_menu_item in main_menu"
          :key="main_menu_item.name">
            <v-list-item-icon>
              <v-icon>{{ main_menu_item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ main_menu_item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="#0182D1" app clipped>
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
      ],
      main_menu: [
        { name: 'member1', icon: 'mdi-vuetify' },
        { name: 'member2', icon: 'mdi-cards-spade' },
        { name: 'member3', icon: 'mdi-cat' },
        { name: 'member4', icon: 'mdi-paperclip' },
        { name: 'member5', icon: 'mdi-horseshoe' },
        { name: 'member6', icon: 'mdi-scale-balance' }
      ]
    }
  }
}
</script>
