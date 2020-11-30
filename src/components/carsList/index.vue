<template>
    <section>
        <div class="cars-item">
            <header class="flex jc-sb aic">
                <div class="fcc">
                    <img src="@/assets/image/c1Logo.png" class="cars-item__img-logo mr-10" />
                    <span>福特标志</span>
                </div>
                <p class="f999">新能源汽车  5座</p>
            </header>
            <section class="mt-15 flex jc-sb aic">
                <div>
                    <p class="mb-5">湘A88888</p>
                    <div class="flex">
                        <ul class="flex">
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p class="f12 mt-5 ml-5 mr-10 w-70">约 <span class="f18">800</span> KM</p>
                    </div>
                </div>
                <div><img src="@/assets/image/c1.png" class="cars-item__img-detail" /></div>
            </section>
            <footer>
                <p class="cars-footer">某某停车场</p>
            </footer>
        </div>
        <!-- 车辆详情 -->
        <div class="cars-item cars-itemDetail">
            <h4 class="title flex jc-sb"><p>某某停车场</p> <i class="iconfont">&#xe615;</i></h4>
            <header class="flex jc-sb aic">
                <div class="fcc">
                    <img src="@/assets/image/c1Logo.png" class="cars-item__img-logo mr-10" />
                    <span>福特标志</span>
                </div>
                <p class="f999">新能源汽车  5座</p>
            </header>
            <div><img src="@/assets/image/c1.png" class="cars-itemDetail__img-detail" /></div>
            <div class="flex jc-sb mt-10 mb-10"><p class="f24 fw">湘A88888</p><p class="f12">约 <span class="f20">800</span> KM</p></div>
            <div class="cars-energy">
                <div class="rel">
                    <span class="e-high" style="width: 80%;"></span>
                    <span class="e-bg"></span>
                </div>
            </div>
            <p class="f8 f999 tac mt-10 mb-15">取车约支付12.0元停车费，实际补贴12.0元</p>
            <div class="bg-e1 flex jc-sb pd10 br mb-10" v-for="(item,index) in carsPriceList" :key="index">
                <p>{{item.name}}</p><p>￥ {{item.value}}</p>
            </div>
            <div class="agreement f10"> 参保 《全面保障服务》 用车更放心 <i class="active"></i></div>
            <div class="cars-btn">预约用车</div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            carsPriceList:[
                { name: "日租车", value: "300/1天"},
                { name: "3日租车", value: "499.00/3天"},
                { name: "5日租车", value: "799.00/5天"},
                { name: "小时租车", value: "99.00/1时"},
            ]
        }
    }
}
</script>

<style lang="scss">
.cars-item{
    width: 450px;
    height: 250px;
    border-radius: 25px;
    padding: 30px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 0 18px rgba(0, 0, 0, .2);
    &__img-logo{
        height: 25px;
    }
    &__img-detail{
        height: 110px;
        width: 200px;
    }

    li{
        height: 24px;
        width: 7px;
        border-radius: 4px;
        margin-right: 3px;
        background: #e1e1e1e1;
    }
    li.active{
        @include webkitB("background",linear-gradient(#17a8fa, #108dd9))
    }
    .w-70{
        width: 75px;
    }
    .cars-footer{
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #e1e1e1;
        color: $color-main;
        opacity: 0.8;
    }
}
.cars-itemDetail{
    height: 720px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 0;
    
    .title{
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        color: #34393f;
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 15px;
    }
    &__img-detail{
        margin-top: 15px;
        width: 100%;
        height: 200px;
    }
    .cars-energy{
        border: 1px solid #e1e1e1;
        border-radius: 30px;
        padding: 15px;
        @include webkitA(box-shadow,0 0 18px 0 rgba(0, 0, 0, .2));
        .e-high{
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            background: $color-blur;
            border-radius: 100px;
        }
        .e-bg{
            display: block;
            height: 8px;
            background: #e1e1e1;
            border-radius: 100px;
        }
    }
    .br{
        border-radius: 10px;
    }
    .agreement{
        i{
            float: right;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #cccccc;
            &::before{
                content: "";
                display: block;
                width: 12px;
                height: 6px;
                margin: 4px 0 0 3px;
                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
                @include webkitA(transform,rotate(-45deg))
            }
            &.active{//选中状态
                background-color: black;
            }
        }
    }
    .cars-btn{
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
    }
}

</style>