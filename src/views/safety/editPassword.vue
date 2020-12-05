<!-- 页面 -->
<template>
    <div class="editPassword mr-30">
        <HeaderBack :column="backData" />
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "EditPassword",
    data () {
        return {
            backData:{
                title: "修改登录密码",
                routerName: "Safety"
            },
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
        }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang='scss'>
.editPassword{
    
    .el-form-item__label{
        color: #e1e1e1;
    }
}
</style>
