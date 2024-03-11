<script>
    export default {
        name: 'CardItem',
        
        props: {
            imageItem: String,
            buttonItem: String,
            secondButton: String,
            thirdButton: String,
            demoItem: String,
            dateItem: String,
            titleItem: String
        }
    }
</script>

<template>

    <div class="d-flex card-container">
        <div class="d-flex gap-2 justify-content-center button-container">
            <button>{{ buttonItem }}</button>
            <button v-if="secondButton">{{ secondButton }}</button>
            <button v-if="thirdButton">{{ thirdButton }}</button>
        </div>
        <div class="image-container">
            <img :src="imageItem" alt="">
        </div>
        <div class="text-white">
            <div class="d-flex">
                <div>{{ demoItem }}</div>
                <div>{{ dateItem }}</div>
            </div>
            <div>{{ titleItem }}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.card-container {
    position: relative;
}

.button-container {
    position: absolute; 
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex; 
    z-index: 2;
}

</style>