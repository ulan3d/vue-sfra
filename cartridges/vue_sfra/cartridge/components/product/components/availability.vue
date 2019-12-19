<template>
    <div class="row">
        <div class="col-12 col-sm-4">
            <label class="availability">
                {{resources.common.label_availability}}:
            </label>
        </div>
        <div class="col-12 col-sm-8">
            <ul class="list-unstyled availability-msg">
                <li>
                    <template v-if="!product.readyToOrder">
                        {{resources.info_selectforstock}}
                    </template>
                    <template v-else>
                        <div v-for="message in product.availability.messages">${message}</div>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'availability',
    props: {
        product: Object,
        resources: Object,
    },
};
</script>
