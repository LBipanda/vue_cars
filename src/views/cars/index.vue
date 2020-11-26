<template>
    <div class="cars-wrap">
        <span @click="user">汽车列表</span>
        <div class="cars-swipe-wrap">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in 7" :key="index">
                    <CarsItem />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css';
import CarsItem from "@/components/carsList";
export default {
    components: {
        Swiper,
        SwiperSlide,
        CarsItem,
    },
    data () {
        return {
            swiperOption: {
                slidesPerView: 3,
                // spaceBetween: 30,
                direction: 'horizontal',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            }
        }
    },
    mounted(){
        
    },
    methods: {
        user(){
            this.$router.push({
                name: "User"
            })
        }
    }
}
</script>

<style lang="scss">
.cars-wrap{
    position: fixed;
    left: 0;
    bottom: 150px;
    right: 0;
    z-index: 11;

    .cars-swipe-wrap{
        padding: 0 150px;
    }
}
</style>
