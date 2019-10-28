<template>
  <v-card class="mx-auto" tile>
    <v-card-text v-if="question">
      <p class="display-1 text--primary">{{ question.title }}</p>

      <v-divider />
      <v-card-subtitle class="pb-0">Tags</v-card-subtitle>
      <v-card-text class="pb-0">
        <v-chip-group column>
          <v-chip v-for="tag in question.tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-subtitle class="pb-1">Description</v-card-subtitle>
      <v-card-text class="text--primary pb-0">
        <div v-if="question.description" v-html="renderMarkdown(question.description)"/>
      </v-card-text>

      <v-card-subtitle class="pb-1">Example</v-card-subtitle>
      <v-card-text class="text--primary">
        <pre>{{ question.example }}</pre>
      </v-card-text>

      <v-card-subtitle class="pb-1">Explanation</v-card-subtitle>
      <v-card-text class="text--primary pb-0">
        <div v-if="question.explanation" v-html="renderMarkdown(question.explanation)"/>
      </v-card-text>

      <v-card-subtitle class="pb-1">Solution</v-card-subtitle>
      <v-card-text class="text--primary">
        <div v-if="question.solution" v-html="renderMarkdown(question.solution, true)"/>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import { Question } from '../models/Question';

@Component({
  props: {
    question: {
      type: Object as () => Question,
    },
  },
})
export default class QuestionDetails extends Vue {
  private highlighter = new MarkdownIt({
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre`;
        } catch (_) {
          return '';
        }
      }
      return '';
    },
  });

  private md = new MarkdownIt();

  private question!: Question;

  renderMarkdown(md: string, highlight: boolean = false): string {
    if (highlight) {
      return this.highlighter.render(md);
    }
    return this.md.render(md);
  }
}
</script>

<style>
  .v-application code {
    background: #272822 !important;
    color: #f8f8f2 !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    font-weight: 400 !important;
  }

  .hljs > code:before, .hljs code:after {
    content: none !important;
  }

  .hljs {
    background: #272822 !important;
  }
</style>
