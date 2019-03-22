<template>
    <div v-if="product.promotions">
        <div v-for="promotion in product.promotions" class="callout" :title="promotion.details">
            {{promotion.calloutMsg}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'promotions',
    props: {
        product: Object,
    },
};
</script>
