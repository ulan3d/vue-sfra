<template>
    <div class="quantity col-sm-6">
        <label>{{resources.common.label_quantity}}</label>
        <select class="quantity-select custom-select form-control">
            <option v-for="quantity in product.quantities"
                :value="quantity.value"
                :data-url="product.productType !== 'bundle' ? quantity.url: ''"
                :selected="quantity.selected">
                {{quantity.value}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'quantity',
    props: {
        product: Object,
        resources: Object,
    },
};
</script>
