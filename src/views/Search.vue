<template>

    <div id="search">

        <div id="searchBody">


            <el-card class="box-card">

                <el-input placeholder="请输入内容"
                          v-model="searchText"
                          @keyup.native.enter="search()"
                >

                    <template slot="append">
                        <el-button icon="el-icon-search" @click="search()"></el-button>
                    </template>
                </el-input>
                <el-divider></el-divider>

                <div>

                    <el-form ref="form" label-width="82">
                        <el-form-item label="排序方式：">
                            <el-select v-model="sortText"
                                       placeholder="请选择"
                                       size="small"
                                       @change="sortChange"
                            >
                                <el-option
                                        v-for="item in sortOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-form>


                    <searchLs :parentLS="magneticLs" :keyWord="lastSearchText"></searchLs>

                    <el-divider></el-divider>
                    <br>

                    <el-pagination
                            id="paging"
                            background
                            small
                            layout="prev, pager, next"
                            :current-page="currentPage"
                            @current-change="pageChange"
                            :total="totalPage">
                    </el-pagination>


                </div>


            </el-card>


            <span class="advertising">

                 <a href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>
                 <a href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>

                 <a href="javascript:alert('请发送邮件到 xxxxx');">
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
                searchText: "", // 搜索关键词
                lastSearchText: "", // 之前的搜索关键词
                sortText: "时间倒序", // 排序方式 标题
                sortValText: "receiptdate_desc", // 排序方式 内容
                lastSortText: '时间', // 之前的排序方式 标题
                totalPage: 1, // 总页数
                currentPage: 1, //分页 当前页数
                sortOptions: [
                    {label: '时间倒序', value: 'receiptdate_desc'},
                    {label: '时间升序', value: 'receiptdate_asc'},
                    {label: '标题倒序', value: 'title_desc'},
                    {label: '标题升序', value: 'title_asc'}
                ],

                magneticLs: [], // 磁力列表
            }
        },
        mounted: function () {
            this.searchText = this.$route.query.wd;

            // 若没有输入搜索关键字，直接跳转到主页
            if (typeof(this.searchText) === "undefined") {
                this.$router.push({path: "/home"});
            } else if (this.searchText.length < 2) {
                this.$router.push({path: "/home"});
            } else {
                this.search();
            }
        },
        watch: {
            //监听url 变化
            $route(to, from) {
                console.log(this.$route.query.wd);

                if (this.$route.query.wd !== this.searchText) {

                    alert("重新请求");
                    this.searchText = this.$route.query.wd;
                    this.search();
                }
            }
        },
        methods: {
            //排序改变
            sortChange: function (val) {

                if (this.sortText !== this.lastSortText) {
                    this.sortValText = val;
                    this.currentPage = 1;

                    this.search();
                    this.lastSortText = val;
                }

            },
            // 页码改变
            pageChange: function (val) {
                console.log(val);
                console.log(this.currentPage);

                this.currentPage = val;

                this.search();

            },

            // 搜索
            search: function () {


                if (this.searchText.length < 2) {

                    this.$message({
                        showClose: true,
                        message: '请输入关键字或关键字过短！',
                        type: 'error'
                    });

                    return;
                }

                if (this.searchText !== this.$route.query.wd) {
                    this.$router.push({path: '/search', query: {wd: this.searchText}});

                    this.currentPage = 1;
                }


                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 500);


                let that = this;
                this.$axios.post("/search", {
                    keyword: that.searchText.trim(),
                    sortText: that.sortValText,
                    page: that.currentPage
                }).then(function (res) {
                    loading.close();

                    let dataTemp = eval(res.data);

                    if (dataTemp.succeedFlag) {

                        that.totalPage = dataTemp.data[0].pageCount;

                        that.magneticLs = dataTemp.data[0].data;


                        that.lastSearchText = that.searchText;
                    }
                });

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
                padding: 0;
                border: none;

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

            .advertising {
                display: inline-block;
                text-align: center;
                width: 100%;
                height: 150px;
                margin: 0 auto;
                margin-top: 10px;

                a {
                    display: block;
                    float: left;
                    width: 33.33333333333%;
                    min-width: 100px;
                }
                img {
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
