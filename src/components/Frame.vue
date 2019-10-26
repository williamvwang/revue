<template>
  <v-content>
    <v-container class="mt-12">
      <v-row>
        <v-col cols="3">
          <v-card class="mx-auto" tile>
            <v-list flat two-line>
              <v-list-item-group v-model="selection" color="primary">
                <v-list-item v-for="(question, i) in questions" :key="i">
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
          <!-- <QuestionList v-bind:questions="questions"/> -->
        </v-col>
        <v-col cols="9">
          <QuestionDetail v-bind:question="question"/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { Question } from '../models/Question';
import QuestionList from './QuestionList.vue';
import QuestionDetail from './QuestionDetail.vue';

@Component({
  components: {
    QuestionList,
    QuestionDetail,
  },
})
export default class Frame extends Vue {
  private questions!: Question[];

  selection = null;

  question: Question | null = null;

  @Watch('selection')
  onSelectionChanged(val: number, oldVal: number) {
    this.question = this.questions[val];
  }

  private created() {
    const context = require.context('../../questions/', false, /\.yaml$/);
    this.questions = context.keys().map(key => context(key));
  }
}
</script>

<style scoped>
</style>
