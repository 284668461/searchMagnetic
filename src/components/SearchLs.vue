<!--搜索结果列表-->
<template>

    <div id="searchLs">

        <el-card class="box-card">

            <router-link to="/detail" target="_blank">xxxxxx</router-link>


            <div class="tagGroup">

                <el-tag>
                    2016-04-20
                </el-tag>
                <el-tag>
                    500Mb
                </el-tag>

            </div>

        </el-card>


        <el-card class="box-card">

            <router-link to="/detail?wd=xxxx" target="_blank">xxxxxx</router-link>

            <div class="tagGroup">

                <el-tag>
                    2016-04-20
                </el-tag>
                <el-tag>
                    500Mb
                </el-tag>

            </div>


        </el-card>


        <el-card class="box-card">

            <router-link to="/detail" target="_blank">xxxxxx</router-link>

            <div class="tagGroup">

                <el-tag>
                    2016-04-20
                </el-tag>
                <el-tag>
                    500Mb
                </el-tag>

            </div>


        </el-card>


        <el-card class="box-card">

            <span>xxxxxx</span>

            <div class="tagGroup">

                <el-tag>
                    2016-04-20
                </el-tag>
                <el-tag>
                    500Mb
                </el-tag>

            </div>


        </el-card>


    </div>

</template>

<script>
    export default {
        name: "SearchLs"
    }
</script>

<style lang="less" scoped>

    .box-card {
        margin-bottom: 15px;

        .tagGroup {
            margin-top: 20px;

            .el-tag {
                margin: 5px;
            }

            .el-tag:first-child {
                margin-left: 0;
            }
        }
    }


</style>
