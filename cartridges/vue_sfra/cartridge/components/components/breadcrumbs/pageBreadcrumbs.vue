<template>
    <div class="row hidden-xs-down">
        <div class="col">
            <ol class="breadcrumb">
                <li v-for="breadcrumbValue in pdict.breadcrumbs" class="breadcrumb-item">
                    <a v-bind:href="breadcrumbValue.url">
                        {{breadcrumbValue.htmlValue}}
                    </a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-breadcrumbs',
    props: {
        'pdict': Object,
    },
};
</script>

