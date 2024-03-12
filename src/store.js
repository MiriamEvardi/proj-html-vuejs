import { reactive } from 'vue';


export const store = reactive({

    activeIndex: 0,

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
    ],

    selectVideo(index) {
        this.activeIndex = index;
    },

})