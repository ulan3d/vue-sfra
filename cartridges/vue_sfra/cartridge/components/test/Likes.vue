<template>
  <div>
    <h2>likes: {{count}} <button v-on:click="$emit('plus-one')">+1</button></h2>
  </div>
</template>

<script>
export default {
  name: 'likes',
  props: [ 'count' ],
  replace: false,
};
</script>
