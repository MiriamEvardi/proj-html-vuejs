<script>
import CardItem from './CardItem.vue';

    export default {
        name: 'MainTop',

        components: {
            CardItem
        },
        
        data() {
            return {

                cardsleft: [
                    {
                        firstbtn: 'Fashion',
                        secondbtn: 'Lifestyle',
                        image: '/img/anime-fashion.webp',
                        demoIcon: 'fa-solid fa-user',
                        demo: 'demo',
                        dateIcon: 'fa-solid fa-calendar-days',
                        date: ' December 25, 2022',
                        title: 'Fashion Trend Now A Days'
                    },
                    {
                        firstbtn: 'Stories',
                        secondbtn: 'Travel',
                        image: '/img/travel-alone.webp',
                        demoIcon: 'fa-solid fa-user',
                        demo: 'demo',
                        dateIcon: 'fa-solid fa-calendar-days',
                        date: ' December 26, 2022',
                        title: 'Traveling Alone Is Awesome'
                    },
                ],

                bigcard: [
                    {
                        firstbtn: 'Lifestyle',
                        secondbtn: 'Stories',
                        thirdbtn: 'Travel',
                        demoIcon: 'fa-solid fa-user',
                        demo: 'demo',
                        dateIcon: 'fa-solid fa-calendar-days',
                        date: ' December 25, 2022',
                        title: 'Places For A Road Trip'
                    }
                ],

                cardsright: [
                    {
                        firstbtn: 'Culture',
                        secondbtn: 'Lifestyle',
                        image: '/img/music-love.webp',
                        ddemoIcon: 'fa-solid fa-user',
                        demo: 'demo',
                        dateIcon: 'fa-solid fa-calendar-days',
                        date: ' December 25, 2022',
                        title: 'Music The Love Of My Life'
                    },
                    {
                        firstbtn: 'Lifestyle',
                        secondbtn: 'Travel',
                        image: '/img/visit-france.webp',
                        demoIcon: 'fa-solid fa-user',
                        demo: 'demo',
                        dateIcon: 'fa-solid fa-calendar-days',
                        date: ' December 26, 2022',
                        title: 'Reasons To Visit France'
                    },
                ]
            }
        }
    }
</script>

<template>
    <div class="section-container">
        <div class="container">
            
            <div class="cards-container d-flex my-5">
                <div class="card-side d-flex flex-column gap-3 me-3">
                    <CardItem class="card-item" v-for="currentCard in cardsleft" 
                            :imageItem="currentCard.image"
                            :buttonItem="currentCard.firstbtn"
                            :secondButton="currentCard.secondbtn"
                            :titleItem="currentCard.title"
                            :itemDemoIcon="currentCard.demoIcon"
                            :demoItem="currentCard.demo"
                            :itemDateIcon="currentCard.dateIcon"
                            :dateItem="currentCard.date"></CardItem>
                </div>

                <div class="big-card" v-for="currentCard in bigcard">
                        <img src="/img/best-places.webp" alt="">

                        <div class="buttons d-flex gap-2">
                            <button>{{ currentCard.firstbtn }}</button>
                            <button>{{ currentCard.secondbtn }}</button>
                            <button>{{ currentCard.thirdbtn }}</button>
                        </div>

                        <div class="text text-white">
                            <div class="d-flex">
                                <div class="mx-2">
                                    <i :class="currentCard.demoIcon"></i>
                                    demo
                                </div>
                                <div>
                                    <i :class="currentCard.dateIcon"></i>
                                    {{ currentCard.date }}
                                </div>
                            </div>
                            <strong class="mx-4">{{ currentCard.title }}</strong>
                        </div>
                    
                </div>

                <div class="card-side d-flex flex-column gap-3 ms-3">
                    <CardItem class="card-item" v-for="currentCard in cardsright" 
                            :imageItem="currentCard.image"
                            :buttonItem="currentCard.firstbtn"
                            :secondButton="currentCard.secondbtn"
                            :titleItem="currentCard.title"
                            :itemDemoIcon="currentCard.demoIcon"
                            :demoItem="currentCard.demo"
                            :itemDateIcon="currentCard.dateIcon"
                            :dateItem="currentCard.date">
                        </CardItem>
                </div>
            </div>



            <div class="d-flex justify-content-between">
                <h2 class="fs-4">LIFESTYLE & STORIES</h2>
                <div class="d-flex gap-2">
                    <button> ALL</button>
                    <button> LIFESTYLE</button>
                    <button> STORIES</button>
                </div>
            </div>

            <div class="row card-item mt-5">

                <div class="col-7">

                    <img class="image" src="/img/success-story.webp" alt="">
                </div>


                <div class="col-5 ps-3 d-flex flex-column justify-content-center">
                    <div>
                        <div class="d-flex">
                            <div class="image-container">
                                <img class="image" src="/public/img/travel-alone-300x200.webp" alt="">
                            </div>
                            <div class="d-flex flex-column justify-content-center ps-2">
                                <div><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ cardsleft[1].date }} </div>
                                <div> {{ cardsleft[1].title }}</div>
                            </div>
                        </div>
                    
                    <hr>
                        <div class="d-flex">
                            <div class="image-container">
                                <img class="image" src="/public/img/best-places-300x200.webp" alt="">
                            </div>
                            <div class="d-flex flex-column justify-content-center p-2">
                                <div><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ cardsleft[1].date }} </div>
                                <div> {{ cardsleft[1].title }}</div>
                            </div>
                        </div>
                    
                    <hr>
                        <div class="d-flex">
                            <div class="image-container">
                                <img class="image" src="/public/img/music-love.webp" alt="">
                            </div>
                            <div class="d-flex flex-column justify-content-center ps-2">
                                <div><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ cardsleft[1].date }} </div>
                                <div> {{ cardsleft[1].title }}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .section-container {
        height: 1120px;
    }


    .cards-container {
        display: flex;
        height: 450px;
    }

    .card-side {
        flex-grow: 1;
        height: 100%;
        
    }

    .card-item {
        height: 450px;
    }

    .big-card img:hover {
    opacity: 0.8;
}

    .big-card {
        position: relative;

        flex-grow: 2;
        
        width: 100%;
        height: 450px;
        
    }

    .big-card img {
    width: 100%;
    height: 100%;

    filter: brightness(0.5);
    
    object-fit: cover;
    }

    .text {
        position: absolute;
        bottom: 10px;
        left: 25%;
    }

    .buttons {
        position: absolute;
        top: 10px;
        left: 30%;
    }

    .image {
        height: 100%;
    }

    .image-container {
        height: 118px;
        width: 180px;
    }

</style>