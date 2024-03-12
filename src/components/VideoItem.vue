<script>
    export default {
        name: 'VideoItem',

        props: {
            videoUrl: String,
            videoTitle: String,
            number: String
        }
    }
    
</script>

<template>

    <li class="video d-flex align-items-center py-2">

        <div class="num">
            {{ number }}
        </div>

        <div>
            <iframe :src="videoUrl" width="85" height="64" frameborder="0"></iframe>
        </div>

        <div class="mx-3">
            {{ videoTitle }}
        </div>

    </li>
   
</template>

<style lang="scss" scoped>

.video {
    list-style-type: none;
    height: 90px;
    border-bottom: 1px solid black;
}

.num {
    width: 25px;
    height: 25px;
    border-radius: 20px;
}

</style>