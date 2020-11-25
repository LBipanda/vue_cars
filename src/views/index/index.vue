<template>
    <div class="amap-wrap">
        <!-- 地图 -->
        <Amap></Amap>
        <!-- DOM渲染 -->
        <Cars></Cars>
        <Navbar></Navbar>
        <!-- 会员 -->
        <div class="children-wrap" :class="{'cancel': userShow}">
            <router-view />
        </div>
    </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap';
import Amap from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@/components/navbar/index";
export default {
    components: {
        Amap,
        Cars,
        Navbar
    },
    data () {
        return {
            
        }
    },
    mounted(){
        
    },
    computed: {
        userShow(){
            const router = this.$route;
            return router.name == "Index" ? true : false;
        }
    },
    watch: {
    },
}
</script>

<style lang="scss">
.amap-wrap{
    height: 100vh;

    .children-wrap{//子路由
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 410px;
        background: #36485D;
        z-index: 100;
        transition: all .5s ease 0s;
        &.cancel{
            right: -410px;
        }
    }
}
</style>
