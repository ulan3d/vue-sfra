<template v-if="price.type === 'tiered'">
    <div class="price">
        <pricing-tiered />
    </div>
</template>
<template v-else-if="price.type === 'range'">
    <div class="price"  itemprop="offers" itemscope itemtype="http://schema.org/AggregateOffer">
        <pricing-range />
    </div>
</template>
<template v-else>
    <div class="price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <pricing-default :price="price" :isLowPrice="null"/>
    </div>
</template>

<script>
import pricingDefault from './default.vue';
import pricingRange from './range.vue';
import pricingTiered from './tiered.vue';
export default {
    components: {
        pricingDefault,
        pricingRange,
        pricingTiered,
    },
    name: 'pricing-main',
    props: {
        price: Object,
    },
};
</script>
