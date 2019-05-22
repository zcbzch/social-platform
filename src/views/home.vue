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
                <img class="icon" src="../assets/banana.png">
            </div>

            <div class="right">
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

                <!-- 个人信息 -->
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

                <!-- 文章内容 -->
                <div class="middle">
                    <div class="user-content"
                        v-for="(item, index) in article" 
                        :key="index"
                        @click="$_openReply(index)">
                        <div class="context">
                            <div class="content">          
                                <div class="item-header">
                                    <el-image class="the-img" src="" fit="cover">
                                        <div slot="error" class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </el-image>
                                    <strong class="username">name</strong>
                                    <i class="el-icon-success success"></i>
                                    <span class="time">{{ $_formatTime(1557426567806) }}</span>
                                </div>
                                <div class="item-text-container">
                                    <span>谷歌停止华为合作将对华为造成什么影响谷歌暂停与华为部分合作路透社（Reuters）周日报道称，谷歌已暂停与华为的合作，该业务不属于开源许可范围。这意味着今后华为手机将不能使用Google Play Store、Gmail和YouTube等服务。此外，谷歌还将停止就安卓和谷歌服务为华为提供技术支持和协作。</span>
                                    <div class="picture">
                                        <el-image class="the-img" src="" fit="cover"></el-image>
                                    </div>
                                </div>
                                <div class="action-list">
                                    <div class="item">
                                        <i class="el-icon-chat-line-round"></i>
                                        <span class="item-num">221</span>
                                    </div>
                                    <div class="item">
                                        <span class="icon iconfont">&#xeca1;</span>
                                        <span class="item-num">1万</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="content-end"></div>
                </div>

                <!-- 推荐关注 -->
                <div class="right">
                    <div class="recommend">
                        <span class="word">推荐关注</span>
                        <span class="refresh">刷新</span>
                        <div class="recommend-body"
                            v-for="(item, index) in article"
                            :key="index">
                            <div class="item-header">
                                <el-image class="the-img" src="" fit="cover">
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                                <strong class="username">name</strong>
                                <i class="el-icon-success success"></i>
                                <div class="follow">
                                    <el-button type="primary" size="mini" round>关注</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog
            :visible.sync="dialog.article.show"
            width="640">
                <div class="dialog-container">
                    <div class="article-dialog">
                        <div class="item-header">
                            <el-image class="the-img" src="" fit="cover">
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                            <strong class="username">name</strong>
                            <i class="el-icon-success success"></i>
                        </div>
                        <div class="item-text-container">
                            <span>谷歌停止华为合作将对华为造成什么影响谷歌暂停与华为部分合作路透社（Reuters）周日报道称，谷歌已暂停与华为的合作，该业务不属于开源许可范围。这意味着今后华为手机将不能使用Google Play Store、Gmail和YouTube等服务。此外，谷歌还将停止就安卓和谷歌服务为华为提供技术支持和协作。</span>
                            <div class="picture">
                                <el-image class="the-img" src="" fit="cover"></el-image>
                            </div>
                            <span class="time">{{ $_formatTimeAll(1557426567806) }}</span>
                        </div>
                        <div class="action-list">
                            <div class="item">
                                <i class="el-icon-chat-line-round"></i>
                                <span class="item-num">221</span>
                            </div>
                            <div class="item">
                                <span class="icon iconfont">&#xeca1;</span>
                                <span class="item-num">1万</span>
                            </div>
                        </div>
                    </div>
                    <div class="reply"
                        v-for="(item, index) in article"
                        :key="index">
                        <div class="reply-container">
                            <div class="article-dialog">
                                <div class="item-header">
                                    <el-image class="the-img" src="" fit="cover">
                                        <div slot="error" class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </el-image>
                                    <strong class="username">name</strong>
                                    <span class="time">{{ $_formatTime(1557426567806) }}</span>
                                </div>
                                <div class="item-text-container">
                                    <span>as we can</span>
                                </div>
                                <div class="action-list">
                                    <div class="item">
                                        <i class="el-icon-chat-line-round"></i>
                                        <span class="item-num">221</span>
                                    </div>
                                    <div class="item">
                                        <span class="icon iconfont">&#xeca1;</span>
                                        <span class="item-num">1万</span>
                                    </div>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
        </el-dialog>

    </div>
</template>

<script>

export default {
    name: "home",
    data() {
        return {
            activeTopbar: 'home',
            dialog: {
                article: {
                    show: false,
                }
            },
            article: [
                {},
                {},
                {}
            ],
        }
    },
    computed: {

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
        },
        //打开回复弹出框
        $_openReply(index) {
            console.log(index)
            this.dialog.article.show = true
        },
        //距离现在时间
        $_formatTime(time) {
            // let now = new Date()
            let diff = new Date().getTime() - time
            const minute = 60 * 1000
            const hour = 60 * minute
            const day = 24 * hour
            if(diff < minute) {
                return '1分钟'
            } else if(diff > minute && diff < hour) {
                return Math.floor(diff/minute)+'分钟'
            } else if(diff > hour && diff < day) {
                return Math.floor(diff/hour)+'小时'
            } else if(diff > day) {
                let myTime = new Date(time)
                return (myTime.getMonth()+1)+'月'+myTime.getDate()+'日'
            }
        },
        //完整时间
        $_formatTimeAll(time) {
            let myTime = new Date(time)
            let ampm = myTime.getHours() > 12 ? '下午':'上午'
            return `${ampm}${myTime.getHours()}:${myTime.getMinutes()} - ${myTime.getFullYear()}年${myTime.getMonth() + 1}月${myTime.getDate()}日`
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
            z-index: 1000;
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
            padding: 60px calc(50% - 570px);
                background-color: rgba(217, 236, 255, .5);
            .content {
                width: 100%;
                height: 100%;
                display: flex;
                margin: auto;
                .left {
                    margin-right: 10px;
                    .user-information {
                        width: 288px;
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
                                margin-left: 10px;
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
                    min-width: 588px;
                    margin-right: 10px;
                    .user-content {
                        border-bottom: 1px solid #e6ecf0;
                        width: 100%;
                        background-color: #fff;
                        .context {
                            padding: 9px 12px;
                            cursor: pointer;
                            &:hover{
                                background: #f5f8fa;
                            }
                            .content {
                                margin-left: 58px;
                                font-size: 14px;
                                display: block;
                                text-align: left;
                                .item-header {
                                    .the-img {
                                        .avator();
                                        float: left;
                                        display: absolute;
                                        margin-left: -58px;
                                    }
                                    
                                    .username {
                                        word-break: break-all;
                                        font-weight: bold;
                                        &:hover {
                                            color: #409EFF;
                                            text-decoration: underline;
                                        }
                                    }
                                    .success {
                                        color: #409EFF;
                                        margin: 5px;
                                    }
                                    .time {
                                        color: #657786;
                                    }
                                }
                                .item-text-container {
                                    width: 506px;
                                    span {
                                        word-wrap: break-word;
                                    }
                                    .picture {
                                        margin-top: 10px;
                                        border-radius: 12px;
                                        overflow: hidden;
                                        .the-img {
                                            width: 100%;
                                            height: 380px;
                                            background-color: #eee;
                                        }
                                    }
                                }
                                .action-list {
                                    margin-top: 15px;
                                    margin-bottom: 5px;
                                    display: flex;
                                    .item{
                                        .item();
                                    };
                                }
                            }
                            
                        }
                    }
                    .content-end {
                        width: 100%;
                        height: 60px;
                        border-top: 1px solid #EBEEF5;
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
                        .refresh {
                            cursor: pointer;
                            margin-left: 15px;
                            margin-bottom: 15px;
                            font-size: 14px;
                            font-weight: 400;
                            color:#409EFF;
                        }
                        .recommend-body {
                            border-bottom: 1px solid #e6ecf0;
                            .item-header {
                                display: flex;
                                margin: 15px 0;
                                .the-img {
                                    .avator();
                                    background-color: #eee;
                                    margin-right: 10px;
                                }
                                .username {
                                    line-height: 51px;
                                    font-size: 14px;
                                    font-weight: bold;
                                    &:hover {
                                        color: #409EFF;
                                        text-decoration: underline;
                                    }
                                }
                                .follow {
                                    margin-left: 15px;
                                    line-height: 51px;
                                    span {
                                        font-weight: 400;
                                        color: #fff;
                                        font-size: 12px;
                                    }
                                }
                                .success {
                                    font-size: 14px;
                                    line-height: 48px;
                                    color: #409EFF;
                                    margin: 0 5px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .avator {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #fff;
        color: #909399;
        text-align: center;
        line-height: 48px;
        margin-top: 3px;
    }
    .item {
        width: 80px;
        display: flex;
        align-items: center;
        color: #657786;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            color: #409EFF;
        }
        i {
            font-size: 16px;
            font-weight: bold;
        }
        .item-num {
            margin-left: 10px;
        }
    }

    .dialog-container {
        padding: 0 20px;
        .article-dialog {
            border-bottom: 1px solid #e6ecf0;
            .item-header {
                display: flex;
                margin-bottom: 15px;
                .the-img {
                    .avator();
                    background-color: #eee;
                    margin-right: 10px;
                }
                .username {
                    line-height: 48px;
                    font-size: 18px;
                    font-weight: bold;
                    &:hover {
                        color: #409EFF;
                        text-decoration: underline;
                    }
                }
                .success {
                    font-size: 18px;
                    line-height: 48px;
                    color: #409EFF;
                    margin: 0 5px;
                }
                .time {
                    margin-left: 10px;
                    line-height: 48px;
                    color: #657786;
                }
            }
            .item-text-container {
                text-align: left;
                font-size: 27px;;
                letter-spacing: .01em;
                color: #14171a;
                span {
                    word-wrap: break-word;
                }
                .time {
                    color: #657786;
                    font-size: 14px;
                }
                .picture {
                    width: 560px;
                    margin: 15px auto;
                    border-radius: 12px;
                    overflow: hidden;
                    .the-img {
                        width: 100%;
                        height: 420px;
                        background-color: #eee;
                    }
                }
            }
            .action-list {
                display: flex;
                margin: 15px 0;
                .item{
                    .item();
                };
            }
        }
        .reply {
            padding: 10px 0;
            border-bottom: 1px solid #e6ecf0;
            .reply-container {
                margin-left: 58px;
                .article-dialog {
                    border-bottom: none;
                    .item-header {
                        margin-bottom: 0;
                        .the-img {
                            float: left;
                            display: absolute;
                            margin-left: -58px;
                        }
                    }
                    .item-text-container {
                        span {
                            font-size: 14px;
                            white-space: pre-wrap;
                            line-height: 20px;
                        }
                    }
                    .action-list {
                        margin: 15px 0 5px 0;
                        // margin-left: -58px;
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
