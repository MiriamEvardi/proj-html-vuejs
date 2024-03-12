<script>
import BottomCardItem from './BottomCardItem.vue';
import {store} from '../store.js'

export default {

    name: 'MainBottom',

    components: {
        BottomCardItem
    },

    data() {
        return {

            store,

            trailers: [
                {
                    number: '1',
                    preview: '/img/preview-0.png',
                    url: 'https://www.youtube.com/embed/9KttFNlaooU?si=kS13elsX9BmZUfpe&rel=0',
                    title: 'Overlord Season 4 - Official Trailer'
                },
                {
                    number: '2',
                    preview: '/img/preview-1.webp',
                    url: 'https://www.youtube.com/embed/Q0KAQ7_YNEk?si=iEKQaCtEQcbQZwv4&rel=0',
                    title: 'Rent A Girlfriend Season 2 - Official Trailer'
                },
                {
                    number: '3',
                    preview: '/img/preview-2.png',
                    url: 'https://www.youtube.com/embed/3YVeAJ-n4ho?si=Yf8pW9r5aTLE7Vm0&rel=0',
                    title: 'Uncle From Another World - Official Trailer'
                },
                {
                    number: '4',
                    preview: '/img/preview-3.png',
                    url: 'https://www.youtube.com/embed/7yy5JCLlpMQ?si=wq9944Bxidle_qPr&rel=0',
                    title: 'Prima Doll - Official Trailer'
                },
                {
                    number: '5',
                    preview: '/img/preview-4.png',
                    url: 'https://www.youtube.com/embed/1T7BFGACOU0?si=QNZ9K0V8n2gY6xhC&rel=0',
                    title: 'Shoot! Goal To The Future - Official Trailer '
                },
                {
                    number: '6',
                    preview: '/img/preview-5.png',
                    url: 'https://www.youtube.com/embed/LkqBsJuEids?si=siBLXbNol7kts5MM&rel=0',
                    title: 'Classroom Of The Elite II - Official Trailer'
                },
                {
                    number: '7',
                    preview: '/img/preview-6.png',
                    url: 'https://www.youtube.com/embed/msRZ0SB2xM8?si=c5BKbB33tg7yumfF&rel=0',
                    title: 'My Hero Academia Season 7 - Official Trailer'
                },
                

            ],

            bottomCards: [
                {
                    image: '/img/anime-fashion.webp',
                    title: 'FASHION'
                },
                {
                    image: '/img/success-story.webp',
                    title: 'CULTURE'
                },
                {
                    image: '/img/healthy-foods.webp',
                    title: 'FOOD'
                },
                {
                    image: '/img/visit-france.webp',
                    title: 'LIFESTYLE'
                },
                {
                    image: '/img/travel-alone.webp',
                    title: 'STORIES'
                },
                {
                    image: '/img/best-places.webp',
                    title: 'TRAVEL'
                }
            ]
        }
    },
}
   
</script>

<template>

    <!-- Start 2nd carousel -->

    <div class="section-container mt-5 mb-3">
        <div class="container">
            <div class="d-flex justify-content-between">
                <h2 class="fs-4">FEATURED POSTS</h2>
                <div class="d-flex gap-2">
                    <div><i class="fa-solid fa-chevron-left"></i></div>
                    <div><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>

            <div class="pb-3" ref="myScrollTarget">
    
                <div class="cards">
                    <div class="test"></div>
                    <div class="test"></div>
                    <div class="test"></div>

                    <div class="bg-white text-center">
                        
                    </div>
                </div>
            </div>



            <!-- Youtube player -->

            <div class="mt-5 mb-3">
                <div class="d-flex">
                     <section>
                        <iframe v-if="trailers.length > 0" width="800" height="550" :src="trailers[store.activeIndex].url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </section>

                    <div class="player">
                        <div class="header-player text-white d-flex align-items-center">
                            <i class="fa-solid fa-play fs-2 ms-3"></i>
                            <div class="ms-3">
                                <div class="fs-5">
                                    Video Playlist
                                </div>
                                <div>
                                    {{ store.activeIndex + 1 }} / {{ trailers.length }}
                                     Videos
                                </div>
                            </div>
                        </div>
                        <div class=" youtube-iframe ">
                            <ul class="d-flex flex-column p-0 m-0">
                                <li class="video d-flex align-items-center" v-for="(trailer, index) in trailers" :key="index" @click="store.activeIndex = index">
                                    <div class="num text-center ms-2 px-2">
                                        {{ trailer.number }}
                                    </div>

                                    <div class="preview-image ms-2 mx-2">
                                       <img :src="trailer.preview" alt="">
                                    </div>

                                    <div class="mx-3">
                                            {{ trailer.title }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                            
                        
                    </div>
                    
                </div>
            </div>
            
        </div>

        <div class="mt-5 pt-3">
            <div class="d-flex gap-3">
                <BottomCardItem class="bottom-card" v-for="currentCard in bottomCards"
                    :imageItem="currentCard.image"
                    :imageTitle="currentCard.title"></BottomCardItem>
            </div>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>

.images {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.player ul {
    background-color: #f3f3f3;
    overflow-y: auto;
}

.youtube-iframe {
    max-height: 470px;
    overflow-y: auto;

    .video {
    list-style-type: none;
    height: 90px;
    border-bottom: 1px solid black;
    }
}

.preview-image {
    width: 90px;
    height: 64px;

    img {
        height: 100%;
        border-radius: 10px;

        object-fit: cover;
        
    }
}

.cards {
    flex: 0 0 calc(100% / 3);
    border: 1px solid black;
    height: 442px;

    strong {
        font-size: 20px;
    }
}

.num {
    width: 25px;
    height: 25px;
    background-color: #333333;
    color: white;
    border-radius: 6px;
}

.player {
    width: 100%;
}

.header-player {
    height: 80px;
    background-color: #333333;
}

.bottom-card {
    width: calc(100% / 6);
    height: 240px;
}

</style>