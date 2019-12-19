<template>
    <div class="product-number hidden-xs-down pull-left">
        {{resources.product.label_item}}
        <span class="product-id" itemprop="productID">{{product.id}}</span>
    </div>
</template>
<script>
export default {
    name: 'product-number',
    props: {
        product: Object,
        resources: Object,
    },
}
</script>
