<!--磁力链接详情页-->
<template>

    <div id="detail">

        <el-card class="box-card">

            <el-card class="box-card">


                <ul>
                    <li class="title">
                        {{magneticInfo.title}}
                    </li>

                    <li>
                        <span>文件大小</span>
                        <span>{{magneticInfo.size}}</span>
                    </li>

                    <li>
                        <span>收录时间</span>
                        <span>{{magneticInfo.time}}</span>
                    </li>


                    <li>
                        <span>磁力链接</span>
                        <span>
                            <span class="magnetic">
                                {{magneticInfo.link}}
                            </span>

                            <input
                                    id="magneticInput"
                                    v-model="magneticInfo.link"
                                    >
                        </span>
                        <span>


                            <el-button
                                    type="primary"
                                    round
                                    @click="copyText()"
                                    size="mini">
                                复制
                            </el-button>
                        </span>
                    </li>

                </ul>

            </el-card>

            <el-card class="box-card fileLsCard">

                <el-divider content-position="left">文件列表</el-divider>


                <ul>
                    <li v-for="item in magneticInfo.fileLs">
                        <span>
                            {{item.name}}
                        </span>

                        <el-tag>
                            <i class="el-icon-folder"></i>
                            {{item.size}}

                        </el-tag>

                    </li>


                    <li v-if="magneticInfo.fileLs.length<1" class="noDate">
                        暂无数据
                    </li>

                </ul>


            </el-card>

            <span class="advertising">

                 <a href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>
                 <a href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>

            </span>

        </el-card>


    </div>
</template>

<script>

    import common from "../assets/common.js"

    export default {
        name: "Detail",
        data() {
            return {
                id:null,
                magneticInfo:{
                    title:null,
                    size:null,
                    time:null,
                    link: null,
                    fileLs:[],
                }
            }
        },
        created:function(){

            this.id = this.$route.query.id;
            this.getDetail();

        },
        methods: {
            // 复制文本
            copyText: function () {
                if (common.copyText('magneticInput')) {
                    this.$message({
                        showClose: true,
                        message: '复制成功！',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        showClose: true,
                        message: '复制失败！',
                        type: 'error'
                    });
                }
            },

            getDetail:function(){

                let that = this;
                this.$axios.post("/getDetail", {
                    id: that.id
                }).then(function (res) {

                    let dataTemp = eval(res.data);

                    if (dataTemp.succeedFlag) {
                        that.magneticInfo = dataTemp.data[0];
                    }
                });
            },
        },
    }
</script>

<style lang="less" scoped>

    li {
        list-style: none;
    }

    #detail {
        height: 65%;
        min-height: 600px;
        > .el-card {
            width: 100%;
            max-width: 1200px;
            min-width: 320px;
            margin: 0 auto;
            margin-top: 15px;
            border: none;

            ul li {
                padding: 5px;

                span:first-child {
                    margin-right: 5px;
                }

                .magnetic {
                    display: inline-block;
                    width: 35%;
                    min-width: 95px;
                    height: 100%;
                    line-height: 100%;
                    padding-top: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                }

                #magneticInput{
                    opacity: 0;
                    width: 1px;
                    height: 10px;
                    padding: 0;
                    margin-left: -10px;
                    cursor: default;
                    z-index: -100;
                }



            }

            li.title {
                font-size: 24px;
                font-weight: bold;
                width: 90%;
                min-width: 230px;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .fileLsCard {
                margin-top: 25px;

                ul li {
                    padding: 5px;
                    width: 100%;
                    min-width: 310px;
                    margin: 0 auto;
                }

                ul li > span:first-child {
                    display: inline-block;
                    width: 75%;
                    min-width: 135px;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }


                ul li>span.el-tag{
                    width: 105px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                li.noDate{
                    padding: 5px;
                    text-align: center;

                    font-size: 16px;
                    color: gainsboro;
                }
            }

            .advertising {
                display: inline-block;
                text-align: center;
                width: 100%;
                height: 10%;
                max-height: 200px;
                margin: 0 auto;
                margin-top: 10px;

                a {
                    display: block;
                    float: left;
                    width: 50%;
                    min-width: 100px;
                }
                img {
                    display: block;
                    width: 97%;
                    height: auto;
                    text-align: center;
                    margin: 0 auto;
                }
            }

        }

    }

</style>
