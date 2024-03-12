import { reactive } from 'vue';


export const store = reactive({

    activeIndex: 0,

    selectVideo(index) {
        this.activeIndex = index;
    },

})