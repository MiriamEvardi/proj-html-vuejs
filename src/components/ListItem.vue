<script>
    export default {
        name: 'ListItem',

        props: {
            itemLink: String,
            itemIcon: String,
            itemChevron: String,
        }
    }
</script>

<template>
    <li>
        <i :class="itemIcon" ></i>
        <div>{{ itemLink }}</div>
        <i :class="itemChevron"></i>
    </li>
</template>


<style lang="scss" scoped>
    li {
        list-style-type: none;
        cursor: pointer;
    }

    .link {
        line-height: 30px;
    }
</style>