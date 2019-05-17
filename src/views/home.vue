<template>
    <div class="home">
        <div class="topbar">
            <div class="left">
                <el-tabs v-model="activeTopbar">
                    <el-tab-pane name="home">
                        <span slot="label">
                            <div class="tab-container">
                                <i class="el-icon-house icon-size"></i>
                                <span class="word-size">主页</span>
                            </div>
                        </span>
                    </el-tab-pane>
                    <el-tab-pane name="message">
                        <span slot="label">
                            <div class="tab-container">
                                <i class="el-icon-bell icon-size"></i>
                                <span class="word-size">消息</span>
                            </div>
                        </span>
                    </el-tab-pane>
                </el-tabs>
            </div>

            <div class="middle">
                <img class="icon" src="../assets/mylogo.png">
            </div>

            <div class="right"></div>
        </div>
        <!-- <el-button @click="() => {this.$router.push('login')}">login</el-button> -->
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            activeTopbar: 'home',
        }
    },
};
</script>

<style lang="less">
    @flex-center: {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home {
        .topbar {
            width: 100%;
            height: 48px;
            padding: 0 50px;
            border-bottom: 2px solid #E4E7ED;
            display: flex;
            position: fixed;
            .left {
                .el-tabs__nav-wrap::after {
                    height: 0;
                }
                .el-tabs__header {
                    margin: 0;
                }
                .el-tabs__item {
                    height: 48px;
                    line-height: 48px;
                }
                .tab-container {
                    width: 100px;
                    .word-size {
                        font-size: 13px;
                        font-weight: bold;
                    }
                    .icon-size {
                        transform: translateY(1.5px);
                        margin-right: 5px;
                        font-size: 21px;
                        font-weight: bold;
                    }
                }
            }
            .middle {
                position: absolute;
                left: 50%;
                top: 6px;
                transform: translateX(-50%);
                .icon {
                    width: 36px;
                    height: 32px;
                }
            }
            .right {

            }
        }
    }
</style>
