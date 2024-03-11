<script>
    export default {
            name: 'AppHeader'
    }
</script>

<template>
    <div class="background text-white">

        <div class="container d-flex align-items-center">

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
    </div>

    <div class="container logo-section">

    </div>

    <hr>
    <div class="container link-section">

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

.link-section {
    height: 50px;
}


</style>