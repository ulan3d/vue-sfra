<template>
  <div class="my-app">
    <h1>Hello {{name}}</h1>
    <likes v-bind:count="count" v-on:plus-one="plus"></likes>
  </div>
</template>

<script>
import Likes from './test/Likes.vue';

export default {
  components: {
    Likes,
  },
  data: function() {
    return {
        name: 'John',
        count: 0
    }
  },
  created() {
    ++this.count;
  },
  methods: {
    plus() {
      this.count++;
    },
  },
};
</script>
