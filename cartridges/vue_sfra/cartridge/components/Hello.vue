<template>
  <div class="my-app">
    <h1>Hello {{pdict.name}}</h1>
    <likes v-bind:count="pdict.count" v-on:plus-one="plus"></likes>
  </div>
</template>

<script>
import Likes from './test/Likes.vue';

export default {
  components: {
    Likes,
  },
  data: function() {
    return { pdict : {
            name: 'John',
            count: 0
        }
    }
  },
  methods: {
    plus() {
      this.pdict.count++;
    },
  },
};
</script>
