<!-- 页面 -->
<template>
    <div class="safety-info">
        <HeaderBack :column="backData" />
        <div class="pt-30">
            <router-link :to="item.path" v-for="(item,index) in childrenList" :key="index">
                <div class="mb-30 aic flex aic rLink">
                    <!-- <i class="iconfont f22 dsib mr-10" v-html="item.icon"></i> -->
                    <p class="e1e1e1">{{item.name}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Safety",
    data () {
        return {
            backData:{
                title: "安全设置",
                routerName: "User"
            },
            childrenList:[
                { name:'修改登录密码', path:"/user/editPassword", icon: "&#xe651;" },
                { name:'设置资金密码', path:"", icon: "&#xe606;" },
                { name:'绑定手机号', path:"", icon: "&#xe61a;" },
                { name:'绑定银行号', path:"", icon: "&#xe646;" },
            ],

        }
    }
}
</script>

<style lang='scss'>
.safety-info{
    .rLink{
        color: $color-blur;
        padding-bottom: 5px;
        border-bottom: 1px solid gray;
        margin-right: 40px;
    }
    .rLink:after{
        content: "";
        position: absolute;
        right: 0;
        width: 10px;
        height: 10px;
        // margin-right: 40px;
        border-top: 1px solid gray;
        border-right: 1px solid gray;
        transform: rotate(45deg);
    }
}
</style>
