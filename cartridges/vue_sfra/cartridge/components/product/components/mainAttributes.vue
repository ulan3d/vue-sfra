<template>
    <div v-if="product.attributes && product.attributes.length > 0" class="main-attributes">
        <template v-for="(attributeGroup) in product.attributes" v-if="attributeGroup.ID === 'mainAttributes'">
            <div v-for="attributes in attributeGroup.attributes" class="attribute-values">
                {{attributes.label}}:
                <template v-for="value in attributes.value">
                    {{value}}
                </template>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'main-attributes',
    props: {
        product: Object,
    },
};
</script>
