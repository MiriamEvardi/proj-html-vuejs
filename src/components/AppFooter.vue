
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
            <div class="mt-5 pt-4 d-flex gap-5"> 
                <ul v-for="(currentLink, index) in links">
                    <h5 > {{ currentLink.title }} </h5>
                    <ListItem  v-for="(link, linkIndex) in currentLink.link" :key="linkIndex" :itemLink="link"></ListItem>
                </ul>

                <div>
                    <h5 class="ms-5">SUBSCRIBE TO NEWSLETTER</h5>
                    <input type="email" class="form-control ms-5 mt-3"placeholder="name@example.com">
                </div>    

            </div>

            <hr>
            

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

    .footer-bottom {
        position: relative; 
        border-top: 6px solid #303433;
        height: 375px;
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

</style>