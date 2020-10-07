<!--磁力链接详情页-->
<template>

    <div id="detail">

        <el-card class="box-card">

            <el-card class="box-card">


                <ul>
                    <li class="title">
                        xxxxxxxxxxxxxxxxxxxxxxxxxx
                    </li>

                    <li>
                        <span>文件大小</span>
                        <span>xxxxx</span>
                    </li>

                    <li>
                        <span>收录时间</span>
                        <span>xxxxx</span>
                    </li>


                    <li>
                        <span>磁力链接</span>
                        <span>

                            <span class="magnetic">
                                magnet:?xt=urn:btih:2456B5582029EFB21D02941AD6FA1BF06BEEC3CA
                            </span>

                        </span>
                        <span>
                            <el-button
                                    type="primary"
                                    round
                                    @click="copyText('aaaaaa')"
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
                    <li>
                        <span>
                            11111111111111111
                        </span>

                        <el-tag><i class="el-icon-folder"></i> 标签一</el-tag>

                    </li>

                    <li>
                       <span>
                            2222222222222
                        </span>

                        <el-tag><i class="el-icon-folder"></i> 标签一</el-tag>

                    </li>

                    <li>
                       <span>
                            333333333333333
                        </span>

                        <el-tag><i class="el-icon-folder"></i> 标签一</el-tag>

                    </li>

                    <li>
                       <span>
                            444444444444444
                        </span>

                        <el-tag><i class="el-icon-folder"></i> 标签一</el-tag>

                    </li>
                </ul>


            </el-card>

            <span class="advertising">

                 <a  href="javascript:alert('请发送邮件到 xxxxx');">
                    <img src="@/assets/adHome.jpg" alt="">
                </a>
                 <a  href="javascript:alert('请发送邮件到 xxxxx');">
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
            }
        },

        methods:{
            copyText:function(val){


                if (common.copyText(val)) {
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
        },
    }
</script>

<style lang="less" scoped>

    li {
        list-style: none;
    }

    #detail {
        > .el-card {
            width: 100%;
            max-width: 1000px;
            min-width: 320px;
            margin: 0 auto;
            margin-top: 15px;

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

            }

            li.title {
                font-size: 24px;
                font-weight: bold;
                width: 90%;
                min-width: 300px;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .fileLsCard {
                margin-top: 25px;

                ul li {
                    padding: 5px;
                }

                ul li > span:first-child {
                    display: inline-block;
                    width: 50%;
                    min-width: 145px;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }



            .advertising{
                display: inline-block;
                text-align: center;
                width: 100%;
                height: 10%;
                max-height: 150px;
                margin: 0 auto;
                margin-top: 10px;

                a{
                    display: block;
                    float: left;
                    width: 50%;
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
