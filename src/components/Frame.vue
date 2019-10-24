<template>
  <v-content>
    <QuestionList v-bind:questions="questions"/>
  </v-content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import QuestionList from './QuestionList.vue';

@Component({
  components: {
    QuestionList,
  },
})
export default class Frame extends Vue {
  private created() {
    const context = require.context('../../questions/', false, /\.yaml$/);
    this.questions = context.keys().map(key => context(key));
  }
}
</script>

<style scoped>
</style>
