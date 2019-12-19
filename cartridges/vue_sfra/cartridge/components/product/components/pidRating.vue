<template>
    <div class="product-number-rating clearfix">
        <!-- Product Number -->
        <product-number v-bind:product="product" v-bind:resources="resources"></product-number>
    
        <!-- Product Rating -->
        <product-rating v-bind:product="product"></product-rating>
    </div>
</template>

<script>
import productNumber from './productNumber.vue';
import productRating from './productRating.vue';

export default {
    components: {
        productNumber,
        productRating,
    },
    name: 'pid-rating',
    props: {
        product: Object,
        resources: Object,
    },
};
</script>
