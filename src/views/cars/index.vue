<template>
    <div class="cars-wrap">
        <span @click="user">汽车列表</span>
        <div class="cars-swipe-wrap">
            <swiper class="swiper" ref="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in 7" :key="index">
                    <CarsItem />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" @click="swiper.slidePrev()"></div>
            <div class="swiper-button-next" @click="swiper.slideNext()"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
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
                spaceBetween: 10,
            }
        }
    },
    mounted(){
        
    },
    computed:{
        swiper() {
            return this.$refs.swiper.$swiper;
        }
    },
    methods: {
        user(){
            this.$router.push({
                name: "User"
            })
        },

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

        .swiper-button-prev,
        .swiper-button-next{
            top: 50%;
            width: 60px;
            height: 100px;
            margin-top: -50px;
            border-radius: 100px;
            background: #ffffff;
            @include webkitA(box-shadow,0 0 18px 0 rgba(0, 0, 0, .2))
            &:hover{
                background: $color-main;
                // color:  #108dd9;
            }
        }
        .swiper-button-prev{
            left: 53px
        }
        .swiper-button-next{
            right: 53px
        }
    }
}
</style>
