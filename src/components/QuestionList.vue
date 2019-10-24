<template>
  <v-card
    class="mx-auto"
    max-width="40%"
    tile
    id="question-card"
  >
    <v-list
      flat
      three-line
    >
      <v-list-item-group v-model="question" color="primary">
        <v-list-item
          v-for="(question, i) in questions"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="question.title"></v-list-item-title>
            <v-chip-group
              column
              active-class="primary--text"
            >
              <v-chip v-for="tag in question.tags" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Question } from '../models/Question';

const AppProps = Vue.extend({
  props: {
    questions: {
      type: Array as () => Array<Question>,
    },
  },
});

@Component
export default class QuestionList extends AppProps {
  private question: Question;
}
</script>

<style scoped>
  #question-card {
    margin-top: 5rem;
  }
</style>
