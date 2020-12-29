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
        <v-list dense nav=false>

          <v-list-group v-for="main_menu_item in main_menu"
          :key="main_menu_item.name"
          :prepend-icon="main_menu_item.icon"
          no-action
          :append-icon="main_menu_item.lists ? undefined : ''">

            <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ main_menu_item.name }}
              </v-list-item-title>
            </v-list-item-content>
            </template>

            <v-list-item v-for="sub_menu in main_menu_item.lists"
            :key="sub_menu.name"
            :to="sub_menu.link"
            >
              <v-list-item-content>
                <v-list-item-title>{{ sub_menu.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

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
        :key="menu_item.name"
        :to="menu_item.link">
          <v-list-item-content>
            <v-list-item-title>{{ menu_item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main app>
      <router-view />
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
        { name: '会社紹介', link: '/' },
        { name: '沿革', link: '/' },
        { name: '連絡先', link: '`mailto:s@a`' }
      ],
      main_menu: [
        {
          name: 'member1',
          icon: 'mdi-vuetify',
          lists: [
            { name: 'Project', link: '/' },
            { name: 'Personal', link: '/about' }
          ]
        },
        {
          name: 'member2',
          icon: 'mdi-cards-spade',
          lists: [
            { name: 'Project' },
            { name: 'Personal' }
          ]
        },
        {
          name: 'member3',
          icon: 'mdi-cat',
          lists: [
            { name: 'Project' },
            { name: 'Personal' }
          ]
        },
        {
          name: 'member4',
          icon: 'mdi-paperclip',
          lists: [
            { name: 'Project' },
            { name: 'Personal' }
          ]
        },
        {
          name: 'member5',
          icon: 'mdi-horseshoe',
          lists: [
            { name: 'Project' },
            { name: 'Personal' }
          ]
        },
        {
          name: 'member6',
          icon: 'mdi-scale-balance',
          lists: [
            { name: 'Project' },
            { name: 'Personal' }
          ]
        }
      ]
    }
  }
}
</script>
