<template>
    <div id="app">

        <el-container>
            <el-header>
               <router-link to="/home">磁力搜</router-link>
            </el-header>

            <el-main>

                <router-view></router-view>



            </el-main>

            <el-footer height="100">

                <span>
                     友情链接：磁力云搜索  磁力蜘蛛
                </span>
                <br>
                <span>
                  特别提示：本站所有资源均来自网络，不承担法律责任，也不对BT种子真实性及合法性负责，请用户注意甄别！
                </span>
                <br>
                <span>
                  ©2020 磁力蜘蛛搜索
                </span>
            </el-footer>
        </el-container>


    </div>
</template>

<script>
    import ad from '@/assets/adHome.jpg'
    export default {
        name: 'app',
        data() {
            return {
                adPath:ad
            }
        },
        components: {}
    }
</script>

<style lang="less" scoped>
    #app {
        width: 100%;
        height: 100%;

        .el-header {
            line-height: 60px;
            background-color: #48A2FF;
            color: white;
        }

        .el-main {
            height: 100%;
            min-height: 561px;
            padding: 0;

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

                .el-form {
                    margin-top: 20px;
                }
            }
        }

        .el-footer {
            background-color: #48A2FF;
            width: 100%;
            height: 100px;
            bottom: 0;


            span{
                display: inline-block;
                text-align: center;
                width: 90%;
                margin: 0 auto;
                color: white;
                margin-top: 5px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
        }
    }

</style>
