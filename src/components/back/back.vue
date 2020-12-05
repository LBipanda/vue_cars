<!-- 页面 -->
<template>
    <div class="header-back">
        <i class="icon" @click="back()"></i>
        {{column.title}}
    </div>
</template>

<script>
export default {
    props: {
        column:{
            type: Object,
            default: {}
        }
    },
    data () {
        return {

        }
    },
    methods: {
        back(){
            this.$router.replace({
                name: this.column.routerName,
            })
        }
    }
}
</script>

<style lang='scss'>
.header-back{
    padding: 30px 0;
    color: #e1e1e1;
    i:before{
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 10px;
        color: $color-blur;
        border-top: 2px solid $color-blur;
        border-left: 2px solid $color-blur;
        @include webkitA(transform,rotate(-45deg))
    }
}
</style>
