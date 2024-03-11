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
                const cardWidth = this.$refs.myScrollTarget.clientWidth / 4;
                this.$refs.myScrollTarget.scrollLeft += cardWidth;
            },

            slidePrevImage() {
                const cardWidth = this.$refs.myScrollTarget.clientWidth / 4;
                this.$refs.myScrollTarget.scrollLeft -= cardWidth;
            
            },

      }
    }
</script>

<template>
    <div class="carousel-container pb-3 pe-3" ref="myScrollTarget">
        
        <div class="card-item d-flex gap-2 py-5 px-3">
            <div class="arrows-wrapper d-flex justify-content-between ">
                <div @click="slidePrevImage()" class="prev"><i class="fa-solid fa-arrow-left"></i></div>
                <div @click="slideNextImage()" class="next"> <i class="fa-solid fa-arrow-right"></i> </div>
            </div>

            <div class="cards" v-for="currentCard in cards">
                <CardItem :imageItem="currentCard.image"
                          :buttonItem="currentCard.button"
                          :secondButton="currentCard.secondbtn"
                          :thirdButton="currentCard.thirdbtn">
                </CardItem>

                <div class="bg-white text-center py-3">
                    <strong>{{ currentCard.title }}</strong>
                    <div>{{ currentCard.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" >
.carousel-container {
    scroll-snap-type: x mandatory;
    overflow: hidden;
    scrollbar-width: thin;
    scroll-snap-type: x mandatory;
    scrollbar-color: transparent transparent;

    background-color: #f3f3f3;
}

.images {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.cards {
    flex: 0 0 calc(100% / 4);

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