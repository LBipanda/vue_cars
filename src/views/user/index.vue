<!-- 页面 -->
<template>
    <div class="user-info">
        <div class="user-info-header flex mb-30">
            <img src="@/assets/image/c1.png" class="user-info-img mr-20" alt="">
            <div>
                <p class="e1e1e1 mt-10">libinnaaazs@163.com</p>
                <div class="user-info-header-grade">文明驾驶分 0</div>
            </div>
        </div>
        <div class="pt-30">
            <router-link to="" v-for="(item,index) in childrenList" :key="index">
                <div class="mb-30 aic flex aic rLink">
                    <i class="iconfont f22 dsib mr-10" v-html="item.icon"></i>
                    <p class="e1e1e1">{{item.name}}</p>
                </div>
            </router-link>
        </div>
        <div class="user-btn">登出</div>
    </div>
</template>

<script>
export default {
    name: "User",
    data () {
        return {
            childrenList:[
                { name:'我的账户', path:"", icon: "&#xe651;" },
                { name:'租车订单', path:"", icon: "&#xe606;" },
                { name:'实名认证', path:"", icon: "&#xe61a;" },
                { name:'安全设置', path:"", icon: "&#xe646;" },
                { name:'帮助中心', path:"", icon: "&#xe67f;" },
            ]
        }
    }
}
</script>

<style lang='scss'>
.user-info{
    margin: 50px 30px;
    .user-info-img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }
    .user-info-header-grade{
        width: 120px;
        height: 20px;
        border-radius: 10px;
        color: #fff;
        margin-top: 10px;
        text-align: center;
        line-height: 20px;
        @include webkitB("background",linear-gradient(#108dd9, #17a8fa))
    }
    .rLink{
        color: $color-blur;
    }
    .user-btn{
        position: absolute;
        bottom: 20px;
        left: 50%;
        height: 44px;
        width: 150px;
        margin-left: -75px;
        border-radius: 22px;
        text-align: center;
        line-height: 44px;
        font-size: 26px;
        color: #ffffff;
        margin-right: 34px;
        background-color: $color-main;
        cursor: pointer;
    }
}
</style>
