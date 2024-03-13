<script>
    export default {
        name: 'BottomCardItem',
        
        props: {
            imageItem: String,
            imageTitle: String
        }
    }
</script>

<template>
    <div class="d-flex position-relative justify-content-center bottom-card-item">
        <div class="background">
            <img class="image" :src="imageItem" alt="">
        </div>

        <h2 class="title fs-1 text-white">{{ imageTitle }}</h2>
    </div>
    
</template>


<style lang="scss" scoped>

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 6px;
        filter: brightness(0.6);
    }

    .background:hover {
        opacity: 0.8;
    }

    img:hover {
        object-position: left;
        transition: 0.5s ease; 
        cursor: pointer;

    }

    .title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate( -50%, -50%);

        font-weight: 600;
    }

</style>