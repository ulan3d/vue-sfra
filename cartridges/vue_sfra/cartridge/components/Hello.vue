<template>
  <div class="my-app">
    <h1>Hello {{pdict.name}}</h1>
    <h2>likes: {{pdict.likes}} <button v-on:click="plus">+1</button></h2>
    <my-cmp v-bind:name="name"></my-cmp>
    <div>propsA: {{pdict}}</div>
  </div>
</template>

<script>
import Likes from './test/Likes.vue';

export default {
  components: {
    Likes,
  },
  props: ['pdict'],
  created() {
    ++this.likes;
  },
  methods: {
    plus() {
      this.likes++;
    },
  },
};
</script>
