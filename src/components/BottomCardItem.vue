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
    <div class="d-flex position-relative justify-content-center">
        <img :src="imageItem" alt="">

        <h2 class="title fs-1 text-white">{{ imageTitle }}</h2>
    </div>
    
</template>


<style lang="scss" scoped>
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate( -50%, -50%);

        font-weight: 600;
    }

</style>