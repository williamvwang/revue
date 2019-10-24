<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#fcb69f"
      dark
      prominent
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)">
        </v-img>
      </template>

      <v-toolbar-title id="toolbar-title">revue</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>fas fa-search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>fas fa-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>fas fa-ellipsis-v</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Topbar extends Vue {}
</script>

<style scoped>
  #toolbar-title {
    font-size: 2.25rem;
    padding-left: 1rem;
  }
</style>
