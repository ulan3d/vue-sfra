<template>
    <div class="ratings pull-right">
        <i v-for="star in [1, 2, 3, 4, 5]" v-bind:class="`fa ${starClass(star)}`" aria-hidden="true"></i>
    </div>
</template>
<script>
export default {
    name: 'product-rating',
    props: {
        product: Object,
    },
    methods: {
        starClass: function (star) {
            if (this.product.rating >= star) {
                return 'fa-star';
            } else if ((this.product.rating % 1 > 0) && (Math.ceil(this.product.rating) >= star)) {
                return 'fa-star-half-o';
            } else {
                return 'fa-star-o'
            }
        }
    },
}
</script>
