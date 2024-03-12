<script>
import CarouselItem from './CarouselItem.vue';
import MainTop from './MainTop.vue';
import MainBottom from './MainBottom.vue';

    export default {
        
        components: {
            CarouselItem,
            MainTop,
            MainBottom
        }
    }
</script>

<template>

    <CarouselItem></CarouselItem>
    <MainTop></MainTop>

    <div class="adv d-flex align-items-center">
        <div class="container ">
            <img src="/img/page-banner-1.webp" alt="">
        </div>
    </div>

    <MainBottom></MainBottom>

</template>

<style lang="scss" scoped>

.adv {
    height: 170px;

    background-color: #f3f3f3;
}

img {
    width: 100%;
}

</style>