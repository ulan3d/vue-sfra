<template>
    <span>
        <template v-if="price.list">
            <meta itemprop="priceCurrency" content="${price.list.currency}" />
            <span class="strike-through list">
                <span class="value" itemprop="price" content="${price.list.decimalPrice}">
                    {{price.list.formatted}}
                </span>
            </span>
        </template>
    
        <meta itemprop="priceCurrency" :content="price.sales.currency" />
        <span class="sales">
            <span class="value" :itemprop="itemprop" :content="price.sales.decimalPrice">
                {{price.sales.formatted}}
            </span>
        </span>
    </span>
</template>

<script>
export default {
    name: 'pricing-default',
    props: {
        price: Object,
        isLowPrice: String,
    },
    computed: {
        itemprop: function() {
            switch (this.isLowPrice) {
                case 'range-low': 
                    return 'lowprice';
                case 'range-high':
                    return 'highprice';
                default:
                    return 'price';
            }
        },
    },
};
</script>
