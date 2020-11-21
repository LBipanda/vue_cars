<template>
    <div class="amap-wrap">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo"></el-amap>
    </div>
</template>

<script>
export default {
    data () {
        return {
            zoom: 12,//初始化地图大小---地图显示的缩放级别范围，在PC上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]
            center: 
        }
},
components: {

    }
}
</script>

<style lang="scss">
.amap-wrap{
    height: 100vh;
}
</style>
