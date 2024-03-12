<script>
    export default {
        name: 'CardItem',
        
        props: {
            imageItem: String,
            buttonItem: String,
            secondButton: String,
            thirdButton: String,
            itemDemoIcon: String,
            demoItem: String,
            itemDateIcon: String,
            dateItem: String,
            titleItem: String,
            isInCarousel: Boolean
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
            <img :src="imageItem" :style="{ filter: isInCarousel ? 'none' : 'brightness(0.5)' }" alt="">
        </div>
        <div class="text-white text text-center">
            <div class="d-flex mx-4">
                <div class="mx-2">
                    <i :class="itemDemoIcon"></i>
                    {{ demoItem }}
                </div>
                <div>
                    <i :class="itemDateIcon"></i>
                    {{ dateItem }}
                </div>
                
            </div>
            <strong>{{ titleItem }}</strong>
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

.text {
    position: absolute; 
    bottom: 10px;
    left: 0;
}

</style>