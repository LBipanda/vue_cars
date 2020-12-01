<!-- 页面 -->
<template>
    <div class="navbar-wrap">
        <ul class="fcc">
            <!-- <li><i class="icon iconfont" v-for="(item,index) in iInfo" :key="index">{{item.name}}</i></li> -->
            <li><i class="iconNav iconfont">&#xe67f;</i></li>
            <li><i class="iconNav iconfont">&#xe6e4;</i></li>
            <li class="slecetCar"><p>选择车辆</p></li>
            <li><i class="iconNav iconfont">&#xe619;</i></li>
            <li><i class="iconNav iconfont" @click="toUser()">&#xe9c7;</i></li>
            
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            iInfo: [
                {name: '&#xe67f;'},
                {name: '&#xe6e4;'},
                {name: '&#xe67f;'},
                {name: '&#xe619;'},
                {name: '&#xe9c7;'},
            ]
        }
    },
    methods:{
        toUser(){
            this.$router.push({
                name: "User",
            })
        }
    }
}
</script>

<style lang='scss'>
.navbar-wrap{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 86px;
    text-align: center;
    z-index: 10;
    
    .slecetCar{
        height: 44px;
        width: 150px;
        border-radius: 22px;
        text-align: center;
        line-height: 44px;
        font-size: 26px;
        color: #ffffff;
        margin-right: 34px;
        background-color: $color-main;
    }
}
</style>
