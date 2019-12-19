<template>
    <!-- Availability -->
    <div class="availability col-md-10 col-12 product-availability" :data-ready-to-order="product.readyToOrder" :data-available="product.available">
        <availability :product="product" :resources="resources" />
    </div>
</template>

<script>
import availability from './availability.vue';

export default {
    name: 'product-availability',
    components: {
        availability,
    },
    props: {
        product: Object,
        resources: Object,
    },
};
</script>
