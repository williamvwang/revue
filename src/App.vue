<template>
  <div id="app">
    <v-app>
      <Topbar/>
      <Frame/>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Topbar from './components/Topbar.vue';
import Frame from './components/Frame.vue';

@Component({
  components: {
    Topbar,
    Frame,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
