<script>
import CardItem from './CardItem.vue';
import {store} from '../store.js';
 
    export default {
        name: 'CarouselItem',
        
        components: {
            CardItem
        },

        data() {
            return {
                store
            }
        },

        methods: {
            
            slideNextImage() {
                const cardWidth = (this.$refs.myScrollTarget.offsetWidth + 20) / 4;
                const scrollTarget = this.$refs.myScrollTarget;
                const scrollWidth = scrollTarget.scrollWidth;
                const totalWidth = scrollWidth - scrollTarget.clientWidth;

                if (totalWidth - scrollTarget.scrollLeft < 10) {
                    scrollTarget.scrollLeft = 0;
                } else {
                    scrollTarget.scrollLeft += cardWidth;
                }
            },

            slidePrevImage() {
                const cardWidth = (this.$refs.myScrollTarget.offsetWidth + 20) / 4;
                const scrollTarget = this.$refs.myScrollTarget;

                if (scrollTarget.scrollLeft === 0) {
                    scrollTarget.scrollLeft = scrollTarget.scrollWidth;
                } else {
                    scrollTarget.scrollLeft -= cardWidth;
                }
            },

      }
    }
</script>

<template>
    <div class="carousel-wrapper">
        <div class="carousel-container mx-auto pb-3" ref="myScrollTarget">
            
            <div class="card-item d-flex py-5">
                <div class="arrows-wrapper d-flex justify-content-between ">
                    <div @click="slidePrevImage()" class="prev"><i class="fa-solid fa-arrow-left"></i></div>
                    <div @click="slideNextImage()" class="next"> <i class="fa-solid fa-arrow-right"></i> </div>
                </div>

                <div class="cards" v-for="currentCard in store.cards" :key="currentCard.key">
                    <CardItem :imageItem="currentCard.image"
                            :buttonItem="currentCard.button"
                            :secondButton="currentCard.secondbtn"
                            :thirdButton="currentCard.thirdbtn"
                            :isInCarousel="true">
                    </CardItem>

                    <div class="bg-white text-center">
                        <strong>{{ currentCard.title }}</strong>
                        <div>{{ currentCard.date }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.carousel-wrapper {
    width: 100%;
    background-color: #f3f3f3;
}

.carousel-container {
    width: 90%;
    scroll-snap-type: x mandatory;
    overflow: hidden;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scroll-snap-type: x mandatory;
    scrollbar-color: transparent transparent;
}

.card-item {
    gap: 20px;
}

.cards {
    flex: 0 0 calc(100% / 4 - (20px /4) * 3);

    strong {
        font-size: 20px;
    }
}

.arrows-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
}

.prev,
.next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;
    -webkit-box-pack: center;
}


</style>