<template>
  <v-content>
    <v-container class="mt-12">
      <v-row>
        <v-col cols="12" md="3">
          <v-card class="mx-auto mb-6" tile>
            <v-card-title class="pb-0">Filter</v-card-title>
            <v-card-actions class="pa-4">
              <v-chip-group
                column
                multiple
                active-class="primary--text"
                v-model="tagSelections"
              >
                <v-chip filter v-for="tag in tags" :key="tag" :value="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto" tile>
            <v-list flat two-line>
              <v-list-item-group v-model="question" color="primary">
                <v-list-item v-for="(question, i) in filteredQuestions" :key="i" :value="question">
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
        </v-col>
        <v-col cols="12" md="9">
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
import QuestionDetail from './QuestionDetail.vue';

@Component({
  components: {
    QuestionDetail,
  },
})
export default class Frame extends Vue {
  private questions!: Question[];

  private tags = new Set<string>();

  private tagSelections: string[] = [];

  private questionSelection: number | null = null;

  private question: Question | null = null;

  get filteredQuestions() {
    if (this.tagSelections.length === 0) {
      return this.questions;
    }
    return this.questions
      .filter(question => this.tagSelections
        .every(tag => question.tags.includes(tag)));
  }

  private created() {
    const context = require.context('../../questions/', false, /\.yaml$/);
    this.questions = context.keys()
      .map((key) => {
        const question: Question = context(key);
        question.tags = question.tags.map(tag => tag.toLowerCase());
        return question;
      });
    this.questions.forEach((question) => {
      question.tags.forEach((tag) => {
        this.tags.add(tag.toLowerCase());
      });
    });
  }
}
</script>

<style>
  .v-chip .v-icon {
    font-size: 14px;
  }
</style>
