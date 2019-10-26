<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-list
      flat
      three-line
    >
      <v-list-item-group v-model="selection" color="primary">
        <v-list-item
          v-for="(question, i) in questions"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="question.title"></v-list-item-title>
            <v-chip-group column>
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
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { Question } from '../models/Question';

@Component({
  props: {
    questions: {
      type: Array as () => Array<Question>,
    },
  },
})

export default class QuestionList extends Vue {
  private questions!: Question[];

  selection = null;

  @Watch('selection')
  onSelectionChanged(val: number, oldVal: number) {
    console.log(this.questions[val]);
  }
}
</script>

<style>
</style>
