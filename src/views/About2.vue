<template>
  <v-app>
    <v-btn>ボタンです。長い。</v-btn>
    <div class="about2">
      <h1>{{ message }}</h1>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'About2',
  data () {
    return {
      message: 'This is an about vue page2'
    }
  }
}
</script>
