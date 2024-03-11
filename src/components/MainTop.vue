<script>
    export default {
        name: 'MainTop',
        
        data() {
            return {

                cardsleft: [
                    {
                        firstbtn: 'Fashion',
                        secondbtn: 'Lifestyle',
                        demo: '<i class="fa-solid fa-user"></i> demo',
                        date: '<i class="fa-solid fa-calendar-days"></i> December 25, 2022',
                        title: 'Fashion Trend Now A Days'
                    },
                    {
                        firstbtn: 'Stories',
                        secondbtn: 'Travel',
                        demo: '<i class="fa-solid fa-user"></i> demo',
                        date: '<i class="fa-solid fa-calendar-days"></i> December 26, 2022',
                        title: 'Traveling Alone Is Awesome'
                    },
                ]
            }
        }
    }
</script>

<template>
    <div class="section-container">
        <div class="container">
            
            <div class="cards-container d-flex my-5">
                <div class="card-side d-flex flex-column gap-3 me-3">
                    <div class="card-item"></div>
                    <div class="card-item"></div>
                </div>

                <div class="big-card">

                </div>

                <div class="card-side d-flex flex-column gap-3 ms-3">
                    <div class="card-item"></div>
                    <div class="card-item"></div>
                </div>
            </div>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .section-container {
        height: 1120px;
    }

    .cards-container {
        height: 450px;
    }

    .card-side {
        flex-grow: 1;
    }

    .card-item {
        border: 1px solid black;
        
        height: 50%;
    }

    .big-card {
        border: 1px solid black;
        flex-grow: 2;
        height: auto;
    }
</style>