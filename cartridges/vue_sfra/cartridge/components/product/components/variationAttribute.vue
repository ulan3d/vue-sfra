<template>
    <div class="attribute">
        <!-- Select <Attribute> Label -->
        <label class="${attr.id}">
            {{resources.common.label_select}} {{attr.displayName}}
        </label>
    
        <template v-if="attr.swatchable">
            <!-- Circular Swatch Image Attribute Values -->
            <a v-for="attrValue in attr.values"
                v-if="!(isBundle && product.productType === 'variant' && !attrValue.selected)"
                :href="attrValue.url"
                :disabled="product.productType === 'variant' && isBundle">
                <span :data-attr-value="attrValue.value"
                      :class="`
                          ${attr.id}-value
                          swatch-circle
                          swatch-value
                          ${attrValue.selected ? 'selected' : ''}
                          ${attrValue.selectable ? 'selectable' : 'unselectable'}
                      `"
                      :style="`background-image: url(${attrValue.images['swatch'][0].url})`">
                </span>
            </a>
        </template>
        <template v-else>
            <!-- Attribute Values Drop Down Menu -->
            <select :class="`custom-select form-control select-${attr.id}`" :disabled="product.productType === 'variant' && isBundle">
                <option :value="attr.resetUrl">
                    {{resources.common.label_select}} {{attr.displayName}}
                </option>
                <option v-for="attrValue in attr.values" :value="attrValue.url"
                    :data-attr-value="attrValue.value"
                    :disabled="!attrValue.selectable"
                    :selected="attrValue.selected"
                >
                    {{attrValue.displayValue}}
                </option>
            </select>
        </template>
    </div>
</template>

<script>
export default {
    name: 'variation-attribute',
    props: {
        product: Object,
        attr: Object,
        resources: Object,
        isBundle: Boolean,
    },
};
</script>
