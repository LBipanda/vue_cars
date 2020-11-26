<template>
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
</template>

<script>
export default {
    
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
    margin: auto;
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
</style>