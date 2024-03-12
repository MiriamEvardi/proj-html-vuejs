<script>
    export default {
        name: 'MainBottom'        
    }
</script>

<template>

    <div class="section-container mt-5 mb-3">
        <div class="container">
            <div class="d-flex justify-content-between">
                <h2 class="fs-4">FEATURED POSTS</h2>
                <div class="d-flex gap-2">
                    <div><i class="fa-solid fa-chevron-left"></i></div>
                    <div><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>

            <div class="pb-3" ref="myScrollTarget">
    
                <div class="cards">
                    <div class="test"></div>
                    <div class="test"></div>
                    <div class="test"></div>

                    <div class="bg-white text-center">
                    
                    </div>
                </div>
            </div>


            <div class="video-container mt-5">

            </div>
            
        </div>

        <div>
            
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
    .section-container {
        height: 1120px;
    }



.images {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.cards {
    flex: 0 0 calc(100% / 3);
    border: 1px solid black;
    height: 442px;

    strong {
        font-size: 20px;
    }
}

.arrows-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
}

.video-container {
    height: 550px;

    border: solid 1px black;
}
</style>