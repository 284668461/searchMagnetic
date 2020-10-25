<!--搜索结果列表-->
<template>

    <div id="searchLs">

        <el-card class="box-card" v-for="item in parentLS">

            <router-link :to="'/detail?id='+item.id" target="_blank">

                <span v-html="item.title"></span>

            </router-link>


            <div class="tagGroup">

                <el-tag>
                    {{ item.receipt }}
                </el-tag>
                <el-tag>
                    {{ item.size }}
                </el-tag>

            </div>

        </el-card>


    </div>

</template>

<script>


    export default {
        name: "SearchLs",
        props: ['parentLS', 'keyWord'],
        data() {
            return {
                thisParentLS: [],
                keyWordText: '',

            }
        },
        watch: {
            // 这里可以差分为两个函数（用逗号分隔）
            keyWord: function (newVal, oldVal) {
                this.keyWordText = this.keyWord;
                this.extrudeShow();
            },
            parentLS: function (newVal, oldVal) {

                this.thisParentLS = this.parentLS;
                this.extrudeShow();
            }
        },

        methods: {
            // 突出显示 关键字
            extrudeShow: function () {

                let that = this;
                that.thisParentLS.forEach((item, index) => {

                    that.thisParentLS[index].title = item.title.replace(that.keyWordText, `<span style="color: red" >${that.keyWordText}</span>`);

                });
            },
        }
    }
</script>

<style lang="less" scoped>

    .box-card {
        margin-bottom: 15px;

        a {
            text-decoration: none;

            &:hover {

                background-color: gainsboro;
                color: black;
            }
        }

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
