<template>
  <div id="app">
    <feedback-widget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FeedbackWidget from './components/FeedbackWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    FeedbackWidget,
  },
});
</script>

<style>
/* Burada global stil ayarları yapabilirsiniz */
</style>
