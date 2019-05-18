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

            <div class="right">
                <!-- <el-tooltip effect="dark" content="个人资料与帐号" placement="bottom">
                    <div class="user">
                        <img src="../assets/van.png">
                    </div>
                </el-tooltip> -->
                <el-tooltip effect="dark" content="个人资料与帐号" placement="bottom" >
                    <el-popover
                        placement="bottom"
                        width="200"
                        trigger="click">

                        <div class="user-popover">
                            <div class="user-data">
                                <div class="user-name">老夫写代码</div>
                                <div class="user-mail">@coderzhj</div>
                            </div>
                            <div class="popover-item"><i class="el-icon-user"></i><span>个人信息</span></div>
                            <div class="popover-item" @click="$_logout"><i class="el-icon-back"></i><span>登出</span></div>
                        </div>
                        
                        <div class="user" slot="reference">
                            <img src="../assets/van.png">
                        </div>
                    </el-popover>
                </el-tooltip>
                <el-button style="
                    margin-left:20px;
                    font-size: 14px;
                    font-weight: bold;" 
                    type="primary"
                    size="mini"
                    round>
                    发推
                </el-button>
            </div>
        </div>

        <div class="container">
            <div class="content">
                <div class="left">
                    <div class="user-information">
                        <div class="background-picture"></div>
                        <div class="user-icon">
                            <img src="../assets/van.png">
                        </div>
                        <div class="user-data">
                            <div class="user-name">老夫写代码</div>
                            <div class="user-mail">@coderzhj</div>
                        </div>
                        <div class="other-data">
                            <div class="item">
                                <div class="top">推文</div>
                                <span>4</span>
                            </div>
                            <div class="item">
                                <div class="top">正在关注</div>
                                <span>8</span>
                            </div>
                            <div class="item">
                                <div class="top">关注者</div>
                                <span>2</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="middle">
                    <div class="user-content">

                    </div>
                </div>

                <div class="right">
                    <div class="recommend">
                        <span>推荐关注</span>
                    </div>
                </div>
            </div>
        </div>

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
    methods: {
        $_authority() {
            let author_id = sessionStorage.getItem('login')
            if(author_id) return
            else {
                this.$router.push({name: 'login'})
            }
        },
        $_logout() {
            sessionStorage.clear()
            this.$router.push({name: 'login'})
        }
    },
    mounted() {
        this.$_authority()
    }
};
</script>

<style lang="less">
    @flex-center: {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home {
        color: #14171a;
        .topbar {
            width: 100%;
            height: 48px;
            padding: 0 50px;
            border-bottom: 2px solid #E4E7ED;
            background-color: #fff;
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
                top: 12px;
                transform: translateX(-50%);
                .icon {
                    width: 27px;
                    height: 24px;
                }
            }
            .right {
                position: absolute;
                right: 50px;
                top: 6px;
                display: flex;
                .user {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    @flex-center();
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        border: 1px solid #fff;
                        cursor: pointer;
                    }
                }
            }
        }

        .container {
            width: 100%;
            height: 800px;
            padding: 60px 50px;
                background-color: rgba(217, 236, 255, .5);
            .content {
                width: 100%;
                height: 100%;
                display: flex;
                .left {
                    margin-right: 18px;
                    .user-information {
                        width: 290px;
                        height: 230px;
                        background-color: #fff;
                        .background-picture {
                            width: 100%;
                            height: 100px;
                            background-color: #409EFF;
                        }
                        .user-icon {
                            width: 72px;
                            height: 72px;
                            border-radius: 50%;
                            margin-left: 8px;
                            transform: translateY(-50%);
                            background-color: #fff;
                            img {
                                width: 100%;
                                height: 100%;
                                border: 2px solid #fff;
                                border-radius: 50%;
                            }
                        }
                        .user-data {
                            position: relative;
                            top: -64px;
                            left: 88px;
                            text-align: left;
                            .user-name {
                                font-size: 18px;
                                font-weight: bold;
                            }
                            .user-mail {
                                margin-top: 3px;
                                font-size: 14px;
                                color: #657786;
                            }
                        }
                        .other-data {
                            display: flex;
                            position: relative;
                            top: -42px;
                            .item {
                                margin-left: 18px;
                                width: 80px;
                                text-align: left;
                                .top {
                                    font-size: 12px;
                                    font-weight: bold;
                                    color: #657786;
                                    margin-bottom: 5px;
                                }
                                span {
                                    font-size: 18px;
                                    font-weight: bold;
                                    color: #1DA1F2;
                                }
                            }
                        }
                        
                    }
                }
                .middle {
                    width: 100%;
                    margin-right: 18px;
                    .user-content {
                        width: 100%;
                        height: 300px;
                        background-color: #fff;
                    }
                }
                .right {
                    margin-right: 0;
                    .recommend {
                        width: 290px;
                        height: 300px;
                        padding: 16px;
                        background-color: #fff;
                        text-align: left;
                        span {
                            font-size: 18px;
                            font-weight: bold;
                            color: #14171a;
                        }
                    }
                }
            }
        }
    }

    .user-popover {
        .user-data {
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #eee;
            .user-name {
                margin-left: 14px;
                font-size: 18px;
                font-weight: bold;
                color: #14171a;
            }
            .user-mail {
                margin-top: 3px;
                margin-left: 14px;
                font-size: 14px;
                color: #657786;
            }
        }

        .popover-item {
            width: 100%;
            height: 40px;
            line-height: 40px;
            i {
                margin-left: 14px;
            }
            span {
                margin-left: 8px;
            }
            &:hover {
                background-color: #409EFF;
                color: #fff;
            }
        }
    }

    .el-popover {
        padding: 12px 0
    }
</style>
