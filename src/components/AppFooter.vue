
<script>

import ListItem from './ListItem.vue';

    export default {
        name: 'AppFooter',

        components: {
            ListItem
        },

        data() {
            return {
                links: [
                    {
                        title: 'GET STARTED',
                        link: ['Resources', 'Tutorials', 'Examples', 'Docs']
                    },
                    {
                        title: 'ABOUT',
                        link: ['Stories', 'Community', 'Blog', 'Brand Assets']
                    },
                    {
                        title: 'FEATURES',
                        link: ['Overview', 'Design', 'Code', 'Collaborate']
                    },
                    {
                        title: 'QUICK LINKS',
                        link: ['Stories', 'Community', 'Blog', 'Brand Assets']
                    },
                ]
            }
        },
        
    }

</script>

<template>

    <div class="footer-bottom">
        <div class="triangle"></div>
        <div class="container text-white">
            <div class="mt-5 pt-4 d-flex justify-content-between gap-5"> 
                <ul v-for="(currentLink, index) in links">
                    <h5 > {{ currentLink.title }} </h5>
                    <ListItem  v-for="(link, linkIndex) in currentLink.link" :key="linkIndex" :itemLink="link"></ListItem>
                </ul>

                <div>
                    <h5>SUBSCRIBE TO NEWSLETTER</h5>
                    <input type="email" class="form-control mt-3"placeholder="Email">
                    <button class="btn mt-3 text-white">SUBSCRIBE</button>
                </div>    

            </div>

            <hr>

            <div class="d-flex justify-content-between align-items-center">
                <div class="py-3">
                    <img class="logo" src="/public/img/anime-logo-300x89.webp" alt="">
                </div>
                <div>
                    © Anime Tech, Theme by HasnainDEV
                </div>
            </div>
            

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

    .footer-bottom {
        position: relative; 
        border-top: 8px solid #303433;
        height: 100%;
        background-color: $primaryColor;
    }

    .triangle {
    position: absolute; 
    top: 0;
    left: 50%; 
    transform: translateX(-50%);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent; 
    border-top: 15px solid #303433;
    }

    button {
        background-color: #545454;
        width: 100%;
    }

    .logo {
        filter: invert(98%) sepia(98%) saturate(9%) hue-rotate(167deg) brightness(104%) contrast(104%);
    }
</style>