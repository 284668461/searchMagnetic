<template>

    <div>

        <el-image :src="logo" class="logo"></el-image>

        <el-card class="box-card">


            <el-form class="demo-ruleForm" @submit.native.prevent>

                <el-form-item>

                    <el-input placeholder="请输入内容"
                              v-model="searchText"
                              @keyup.native.enter="searchBtn()"
                    >

                        <template slot="append">


                            <el-button icon="el-icon-search" @click="searchBtn()"></el-button>


                        </template>
                    </el-input>

                </el-form-item>

            </el-form>


        </el-card>



        <a class="advertising" href="javascript:alert('请发送邮件到 xxxxx');">
            <img src="@/assets/adHome.jpg" alt="">
        </a>


    </div>

</template>

<script>
    import logo from '@/assets/logo.png'

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                logo: logo,
                searchText: ""
            }
        },
        methods: {
            searchBtn: function () {


                if(this.searchText.length<2){
                    this.$message({
                        showClose: true,
                        message: '请输入关键字或关键字过短！',
                        type: 'error'
                    });
                    return;
                }



                this.$router.push({ path: '/search', query: { wd: this.searchText }})
            },
        }
    }
</script>


<style lang="less" scoped>

        .logo {
            display: block;
            width: 150px;
            height: auto;
            padding: 0;
            margin: 0 auto;
        }

        .el-card {

            width: 50%;
            max-width: 800px;
            min-width: 280px;
            margin: 0 auto;
            /*margin-top: 150px;*/

            .el-form {
                margin-top: 20px;
            }
        }


        .advertising{
            display: block;
            text-align: center;
            width: 250px;
            margin: 0 auto;
            margin-top: 10px;

            img{
                display: block;
                width: 250px;
                height: auto;
                text-align: center;
                margin: 0 auto;
            }
        }


</style>
