<template>
  <div id="app">
    <v-app>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view /> -->
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
