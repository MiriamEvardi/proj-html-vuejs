<script>
import ListItem from './ListItem.vue';

    export default {
        name: 'AppHeader',

        components: {
            ListItem
        },

        data() {
            return {
                socials: [
                    'fa-brands fa-facebook-f',
                    'fa-brands fa-twitter',
                    'fa-brands fa-instagram',
                    'fa-brands fa-youtube'
                ],

                links: [
                    {
                        link: 'HOME',
                        icon: 'fa-solid fa-house-chimney'
                    },
                    {
                        link: 'LIFESTYLE',
                        icon: 'fa-solid fa-suitcase',
                        chevron: 'fa-solid fa-chevron-down'
                    },
                    {
                        link: 'STORIES',
                        icon: 'fa-solid fa-book-open-reader',
                        chevron: 'fa-solid fa-chevron-down'
                    },
                    {
                        link: 'PAGES',
                        icon: 'fa-solid fa-book',
                        chevron: 'fa-solid fa-chevron-down'
                    },
                    {
                        link: 'ABOUT US',
                        icon: 'fa-solid fa-user'
                    }
                ],
            }
        }
    }

</script>

<template>
    <div class="background text-white d-flex justify-content-between">

        <div class="container d-flex justify-content-between">
             <div class="d-flex align-items-center">  
                <div class="py-2">
                    <strong class="updates"> NEW UPDATES </strong>
                </div>

                <div class="image">
                    <img src="/public/img/meal-time-150x150.webp" alt="">
                </div>

                <div>
                    <strong class="px-2">05:35</strong>
                </div>
            </div> 


            <div class="d-flex align-items-center ">
                <div class="pe-3 arrow">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="arrow ps-3">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>

                <ul class="d-flex justify-content-between">
                    <div class="social-container rounded-4 ms-2 mt-3 d-flex justify-content-center align-items-center social" v-for="currentSocial in socials">
                        <ListItem class="icon fs-5 " :itemIcon="currentSocial"></ListItem>
                    </div>
                </ul>
            </div>
        </div>
    </div>

    <div class="container logo-section d-flex justify-content-between">
        <div class="my-3 pt-3 logo">
            <img src="/public/img/anime-logo-300x89.webp" alt="">
        </div>

        <div class="adv-container mt-4">
            <img class="adv" src="/public/img/header-banner.webp" alt="">
        </div>
    </div>

    <hr>

    <div class="container link-section d-flex justify-content-between">
        <div>
            <i class="fa-solid fa-bars fs-2 text-secondary"></i>
        </div>

        <ul class="d-flex gap-5 align-items-center">
            
            <ListItem class="d-flex align-items-center gap-2 link-hover" v-for="currentLink in links" 
                    :itemIcon="currentLink.icon" 
                    :itemLink="currentLink.link"
                    :itemChevron="currentLink.chevron"
                    :isLink="true">
                </ListItem>
        </ul>

        <div>
            <i class="fa-solid fa-magnifying-glass fs-2 text-secondary"></i>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../variables.scss' as *;

.background {
    background-color: $primaryColor;

    height: 46px;
}

.updates {
    background-color: #545454;

    padding: 12.8px 20px;
}

.image {
    width: 46px;
    height: 46px;

    img {
        width: 100%;
        height: 100%;
    }
}

.logo-section {
    height: 120px;
}

.social:hover {
    background-color: $secondaryColor;
    color: $secondaryColor;
}

.icon:hover {
    color: white;
}

.arrow:hover {
    color: $secondaryColor;
}

.link-section {
    height: 50px;
}

.link-hover:hover {
    color: $primaryColor;
}
 
.social-container {
    background-color: white;

    width: 28px;
    height: 28px;

}

.icon {
    color: $primaryColor;
}

.adv-container {
    height: 90px;
}

img {
    height: 100%;
}

hr {
    color: #9e9e9e;
}


</style>