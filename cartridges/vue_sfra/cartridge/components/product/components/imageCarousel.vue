<template>
    <div class="primary-images col-12 col-sm-6">
        <div v-bind:id="`pdpCarousel-${product.id}`" class="carousel slide" data-interval="0">
            <ol class="carousel-indicators">
                <li v-for="(image, index) in product.images['large']"
                    v-bind:data-target="`#pdpCarousel-${product.id}`"
                    v-bind:data-slide-to="index"
                    v-bind:class="index === 0 ? 'active' : ''">
                </li>
            </ol>
    
            <div class="carousel-inner" role="listbox">
                <div v-for="(image, index) in product.images['large']" :class="`carousel-item ${index === 0 ? 'active' : ''}`">
                    <img :src="image.url" class="d-block img-fluid" :alt="image.alt" itemprop="image">
                </div>
            </div>
    
            <a class="carousel-control-prev" :href="`#pdpCarousel-${product.id}`" role="button" data-slide="prev">
                <span class="fa icon-prev" aria-hidden="true"></span>
                <span class="sr-only">{{resources.common.button_previous}}</span>
            </a>
            <a class="carousel-control-next" :href="`#pdpCarousel-${product.id}`" role="button" data-slide="next">
                <span class="fa icon-next" aria-hidden="true"></span>
                <span class="sr-only">{{resources.common.button_next}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-carousel',
    props: {
        product: Object,
        resources: Object,
    },
};
</script>
