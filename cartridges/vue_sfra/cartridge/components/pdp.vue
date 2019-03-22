<template>
    <div class="my-app container product-detail product-wrapper"
        v-bind:data-pid="product.id"
        itemscope itemtype="http://schema.org/Product">
        <div class="row">
            <div class="col-12">
                <!---Breadcrumbs--->
                <div class="product-breadcrumb d-md-none">
                    <!-- components/breadcrumbs/pageBreadcrumbs -->
                    <page-breadcrumbs v-bind:pdict="pdict"></page-breadcrumbs>
                </div>

                <!-- Product Name -->
                <div class="row">
                    <div class="d-md-none col-sm-12">
                        <h1 class="product-name" itemprop="name">{{product.productName}}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- Product Images Carousel -->
            <image-carousel v-bind:product="pdict.product" v-bind:resources="pdict.resources"></image-carousel>

            <div class="col-12 col-sm-6">
                <!---Breadcrumbs--->
                <div class="product-breadcrumb hidden-sm-down">
                    <page-breadcrumbs v-bind:pdict="pdict"></page-breadcrumbs>
                </div>

                <!-- Product Name -->
                <h1 class="product-name hidden-sm-down">{{product.productName}}</h1>

                <pid-rating v-bind:product="pdict.product" v-bind:resources="pdict.resources"></pid-rating>

                <div class="row justify-content-center">
                    <!-- Attributes and Quantity -->
                    <div class="col-md-10 col-12">
                        <main-attributes v-bind:product="pdict.product"></main-attributes>

                        <isset name="isBundle" value="${false}" scope="page" />
                        <div v-for="(attr, index) in product.variationAttributes" v-bind:data-attr="attr.id">
                            <!-- Quantity Drop Down Menu -->
                            <quantity v-if="product.variationAttributes.length === (index + 1) && product.options.length === 0"
                                :product="pdict.product"
                                :resources="pdict.resources" />
                            <variation-attribute :isBundle="false" :product="pdict.product" :attr="attr" :resources="pdict.resources" />
                        </div>

                        <div v-if="!product.variationAttributes && product.options.length === 0" class="simple-quantity">
                            <quantity :product="pdict.product" :resources="pdict.resources" />
                        </div>
                    </div>

                    <isinclude v-if="product.options && product.options.length > 0" template="product/components/options" />

                    <!-- Size Chart -->
                    <div v-if="product.variationAttributes && product.sizeChartId" class="size-chart col-md-10 col-12">
                        <isinclude template="product/components/sizeChart" />
                    </div>

                    <!-- Product Availability -->
                    <product-availability :product="pdict.product" :resources="pdict.resources" />

                    <!-- Applicable Promotions -->
                    <div class="col-md-10 col-12 promotions">
                        <promotions :product="pdict.product" />
                    </div>

                    <div class="col-md-10 col-12">
                        <hr>
                    </div>

                    <div class="col-12 prices-add-to-cart-actions">
                        <!-- Prices -->
                        <div class="prices">
                            <pricing-main :price="pdict.product.price" />
                        </div>

                        <!-- Cart and [Optionally] Apple Pay -->
                        <isinclude template="product/components/addToCartProduct" />
                    </div>

                    <!-- Social Sharing Icons -->
                    <isinclude template="product/components/socialIcons" />
                </div>
            </div>
        </div>

        <isinclude template="product/components/descriptionAndDetails" />
    </div>
</template>

<script>
import pageBreadcrumbs from './components/breadcrumbs/pageBreadcrumbs.vue';
import pidRating from './product/components/pidRating.vue';
import imageCarousel from './product/components/imageCarousel.vue';
import mainAttributes from './product/components/mainAttributes.vue';
import quantity from './product/components/quantity.vue';
import variationAttribute from './product/components/variationAttribute.vue';
import productAvailability from './product/components/productAvailability.vue';
import promotions from './product/components/promotions.vue';
import pricingMain from './product/components/pricing/main.vue';

export default {
    components: {
        pageBreadcrumbs,
        pidRating,
        imageCarousel,
        mainAttributes,
        quantity,
        variationAttribute,
        productAvailability,
        promotions,
        pricingMain,
    },
    computed: {
        product: function() { return this.pdict.product },
    },
};
</script>

