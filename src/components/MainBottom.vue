<script>
import VideoItem from './VideoItem.vue';
import BottomCardItem from './BottomCardItem.vue'

export default {

    name: 'MainBottom',

    components: {
        VideoItem,
        BottomCardItem
    },

    data() {
        return {
            trailers: [
                {
                    number: '1',
                    url: 'https://www.youtube.com/embed/9KttFNlaooU?si=kS13elsX9BmZUfpe',
                    title: 'Overlord Season 4 - Official Trailer'
                },
                {
                    number: '2',
                    url: 'https://www.youtube.com/embed/Q0KAQ7_YNEk?si=iEKQaCtEQcbQZwv4',
                    title: 'Rent A Girlfriend Season 2 - Official Trailer'
                },
                {
                    number: '3',
                    url: 'https://www.youtube.com/embed/3YVeAJ-n4ho?si=Yf8pW9r5aTLE7Vm0',
                    title: 'Uncle From Another World - Official Trailer'
                },
                {
                    number: '4',
                    url: 'https://www.youtube.com/embed/7yy5JCLlpMQ?si=wq9944Bxidle_qPr',
                    title: 'Prima Doll - Official Trailer'
                },
                {
                    number: '5',
                    url: 'https://www.youtube.com/embed/1T7BFGACOU0?si=QNZ9K0V8n2gY6xhC',
                    title: 'Shoot! Goal To The Future - Official Trailer '
                },
                {
                    number: '6',
                    url: 'https://www.youtube.com/embed/LkqBsJuEids?si=siBLXbNol7kts5MM',
                    title: 'Classroom Of The Elite II - Official Trailer'
                },
                {
                    number: '7',
                    url: 'https://www.youtube.com/embed/msRZ0SB2xM8?si=c5BKbB33tg7yumfF',
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

            <div class="video-container mt-5 mb-3">
                <div class="d-flex">
                    <section>
                        <iframe width="800" height="550" src="https://www.youtube.com/embed/9KttFNlaooU?si=kS13elsX9BmZUfpe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </section>

                    <div class="player">
                        <div class="header-player">

                        </div>
                        <div>
                            <ul class="d-flex flex-column p-0">
                                <VideoItem class="youtube-iframe" v-for="currentVideo in trailers" 
                                        :key="currentVideo.number"
                                        :number="currentVideo.number"
                                        :videoUrl="currentVideo.url"
                                        :videoTitle="currentVideo.title"></VideoItem>
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
    max-height: 470px;
    overflow-y: auto;
}

.cards {
    flex: 0 0 calc(100% / 3);
    border: 1px solid black;
    height: 442px;

    strong {
        font-size: 20px;
    }
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