<script>
import CardItem from './CardItem.vue';
import {store} from '../store.js';

    export default {
        name: 'MainTop',

        components: {
            CardItem
        },
        
        data() {
            return {
                store,

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
                    <button class="mainbtn"> ALL</button>
                    <button class="mainbtn"> LIFESTYLE</button>
                    <button class="mainbtn"> STORIES</button>
                </div>
            </div>

            <div class="row card-item mt-5">

                <div class="col-7 position-relative">

                    <img class="image overflow-hidden rounded" src="/img/success-story.webp" alt="">
                    <div class=" position-absolute bottom-0 left-0 m-4 text-white">
                                <strong><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ store.cards[6].date }} </strong>
                                <h4> {{ store.cards[6].title }}</h4>
                    </div>
                            <div class="position-absolute top-0 left-0 m-4">
                                <button >{{ store.cards[6].button }}</button>
                            </div>

                </div>


                <div class="col-5 ps-3 d-flex flex-column justify-content-center ">
                    <div>
                        <div class="d-flex position-relative">

                            <div class="image-container ">
                                <img class="image overflow-hidden rounded" src="/public/img/travel-alone-300x200.webp" alt="">
                            </div>

                            <div class=" banner d-flex flex-column justify-content-center ps-2">
                                <div><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ cardsleft[1].date }} </div>
                                <strong> {{ cardsleft[1].title }}</strong>
                            </div>
                            <div class="position-absolute top-0 left-0 m-2">
                                <button>{{ store.cards[6].button }}</button>
                            </div>
                        </div>
                    
                        <hr>

                        <div class="d-flex position-relative">
                            <div class="image-container">
                                <img class="image overflow-hidden rounded" src="/public/img/best-places-300x200.webp" alt="">
                            </div>
                            <div class="banner d-flex flex-column justify-content-center p-2">
                                <div><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ bigcard[0].date }} </div>
                                <strong> {{ bigcard[0].title }}</strong>
                            </div>
                            <div class="position-absolute top-0 left-0 m-2">
                                <button >{{ store.cards[6].button }}</button>
                            </div>
                        </div>
                    
                        <hr>

                        <div class="d-flex position-relative">
                            <div class="image-container">
                                <img class="image overflow-hidden rounded" src="/public/img/music-love.webp" alt="">
                            </div>
                            <div class="banner d-flex flex-column justify-content-center ps-2">
                                <div><i class="fa-solid fa-user"></i> demo <i class="fa-solid fa-calendar-days"></i> {{ cardsright[0].date }} </div>
                                <strong> {{ cardsright[0].title }}</strong>
                            </div>
                            <div class="position-absolute top-0 left-0 m-2">
                                <button>{{ store.cards[6].button }}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../variables.scss' as *;

    .section-container {
        height: 1120px;
    }

    .mainbtn {
        background-color: $secondaryColor;
        color: white;
    }

    .mainbtn:hover {
        background-color: $primaryColor;;
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

    .banner {
        color: #565656;
    }

    .buttons {
        position: absolute;
        top: 10px;
        left: 30%;
    }

    .image {
        height: 100%;
        filter: brightness(0.5);
    }

    .image:hover {
        opacity: 0.8;
    }

    .image-container {
        height: 118px;
        width: 180px;
    }

</style>