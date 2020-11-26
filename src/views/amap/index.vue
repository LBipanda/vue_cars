<template>
    <div class="amap-wrap">
        <el-amap vid="amapContainer"></el-amap>
    </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
    data () {
        return {
            map: null,
            zoom: 12,//初始化地图大小---地图显示的缩放级别范围，在PC上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]
            center: [112.950062,28.224693],
            events: {},
        }
    },
    mounted(){
        lazyAMapApiLoaderInstance.load().then(() => {
            // your code ...
            this.map = new AMap.Map('amapContainer', {
                center: new AMap.LngLat(112.950062,28.224693),
                zoom: this.zoom,//初始化地图层级

            });
        });
    },
    components: {

    },
}
</script>

<style lang="scss">
.amap-wrap{
    height: 100vh;
}
</style>
