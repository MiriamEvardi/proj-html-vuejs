<script>
import CardItem from './CardItem.vue';

    export default {
        name: 'CarouselItem',
        
        components: {
            CardItem
        },

        data() {
            return {
                cards: [
                    {
                        button: 'Food',
                        image: '/img/healthy-foods.webp',
                        title: 'The Best Healthy Foods In 2022',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Fashion',
                        image: '/img/winter.webp',
                        title: 'The Best Winter Outfits',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Fashion',
                        image: '/img/photographers-mistakes.webp',
                        title: 'Beginner Photographer\'s Mistakes',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Culture',
                        secondbtn: 'Stories',
                        image: '/img/ideas-anime.webp',
                        title: 'Live Ideas You Might Be Anime',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Lifestyle',
                        secondbtn: 'Travel',
                        image: '/img/visit-france.webp',
                        title: 'Reasons To Visit France',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Stories',
                        secondbtn: 'Travel',
                        image: '/img/travel-alone.webp',
                        title: 'Traveling Alone Is Awesome',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Culture',
                        secondbtn: 'Stories',
                        image: '/img/success-story.webp',
                        title: 'The Best Success Stories',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Lifestyle',
                        secondbtn: 'Stories',
                        thirdbtn: 'Travel',
                        image: '/img/best-places.webp',
                        title: 'Places For A Road Trip',
                        date: 'December 25, 2022'
                    },
                    {
                        button: 'Culture',
                        secondbtn: 'Lifestyle',
                        image: '/img/music-love.webp',
                        title: 'Music The Love Of My Life',
                        date: 'December 25, 2022'
                    },
                    {
                        button: 'Fashion',
                        secondbtn: 'Lifestyle',
                        image: '/img/anime-fashion.webp',
                        title: 'Fashion Trend Now A Days',
                        date: 'December 25, 2022'
                    },
                    {
                        button: 'Food',
                        image: '/img/rice-ball.webp',
                        title: 'Hygenic Recipe To Prepare Rice',
                        date: 'December 26, 2022'
                    },
                    {
                        button: 'Food',
                        image: '/img/meal-time.webp',
                        title: 'The Best Time To Have A Meal',
                        date: 'December 26, 2022'
                    }
                ]
            }

        },

        methods: {
            
            slideNextImage() {
                const cardWidth = (this.$refs.myScrollTarget.offsetWidth + 20 ) / 4;
                this.$refs.myScrollTarget.scrollLeft += cardWidth;
            },

            slidePrevImage() {
                const cardWidth = (this.$refs.myScrollTarget.offsetWidth + 20 ) / 4;
                this.$refs.myScrollTarget.scrollLeft -= cardWidth;
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

                <div class="cards" v-for="currentCard in cards" :key="currentCard.key">
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

.images {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
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