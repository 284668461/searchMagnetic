<template>

    <div id="search">

        <div id="searchBody">


            <el-card class="box-card">

                <el-input placeholder="请输入内容" v-model="searchText">

                    <template slot="append">
                        <el-button icon="el-icon-search" @click="searchBtn()"></el-button>
                    </template>
                </el-input>
                <el-divider></el-divider>

                <div>


                    <el-form ref="form" label-width="82">
                        <el-form-item label="排序方式：">
                            <el-select v-model="rankFlag"
                                       placeholder="请选择"
                                       size="small"
                                       @change="rankChange"
                            >
                                <el-option
                                        v-for="item in rankOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-form>


                    <searchLs></searchLs>

                    <el-divider></el-divider>
                    <br>

                    <el-pagination
                            id="paging"
                            background
                            layout="prev, pager, next"
                            :pager-count="4"
                            :hide-on-single-page="true"
                            :total="1000">
                    </el-pagination>


                </div>


            </el-card>


            <span class="advertising">

                 <a  href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>
                 <a  href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>

                 <a  href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>

            </span>

        </div>


    </div>


</template>

<script>
    import searchLs from "../components/SearchLs"

    export default {
        name: "search",
        components: {searchLs},
        data() {
            return {
                searchText: "",
                rankFlag: "收录时间", // 排序方式
                rankOptions: [{
                    value: '收录时间',
                    label: '收录时间'
                }, {
                    value: '文件大小',
                    label: '文件大小'
                }],
            }
        },
        mounted: function () {
            this.searchText = this.$route.query.wd;
        },
        methods: {
            rankChange: function (val) {
                console.log(val);
            }
        },
    }
</script>

<style lang="less" scoped>

    #search {
        padding: 20px 0 20px 0;
        width: 100%;

        #searchBody {

            width: 100%;
            max-width: 1000px;
            min-width: 320px;
            margin: 0 auto;

            > .box-card {
                width: 100%;
                min-height: 500px;
                padding: 0;

                .el-select {
                    width: 120px;
                    margin-left: -15px;

                    &:focus {
                        outline: none;
                        border-color: #DCDFE6;;
                    }

                    .el-input.is-focus .el-input__inner,
                    .el-input__inner:focus {
                        border-color: #DCDFE6;;
                    }
                }

                .el-pagination {
                    padding: 0;
                    min-width: 300px;

                    .btn-prev,
                    .btn-next,
                    .el-pager li {
                        margin: 0 3px !important;
                        min-width: 29px !important;
                        color: red !important;
                    }
                }

            }


            .advertising{
                display: inline-block;
                text-align: center;
                width: 100%;
                height: 150px;
                margin: 0 auto;
                margin-top: 10px;

                a{
                    display: block;
                    float: left;
                    width: 33.33333333333%;
                    min-width: 100px;
                }
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                    text-align: center;
                    margin: 0 auto;
                }
            }


        }
    }


</style>
