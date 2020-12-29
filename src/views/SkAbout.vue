<template>
    <div class="about">
        <h1>About for sk</h1>
        <v-card v-for="item in card_list" :key="item.id">
            <v-card-title>
                {{ item.title }}
            </v-card-title>
            <v-card-text>
                {{ item.content }}
            </v-card-text>
            <v-card-actions>
                <v-btn outlined rounded text>
                    詳細
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      card_list: [
        { id: '1', title: 'xx様向け案件', content: 'Card content', term: '2020/9/1-2020/12/31' },
        { id: '2', title: 'yy様向け案件', content: 'Card content', term: '2019/11/1-2020/8/31' },
        { id: '3', title: 'zz様向け案件', content: 'Card content', term: '2019/10/1-2020/10/31' }
      ]
    }
  }
}
</script>
