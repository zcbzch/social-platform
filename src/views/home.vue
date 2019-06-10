<template>
    <div class="home">

        <div class="container">
            <div class="content">

                <!-- 个人信息 -->
                <div class="left">
                    <div class="user-information" @click="()=>{this.$router.push({name:'info'})}">
                        <div class="background-picture"></div>
                        <div class="user-icon">
                            <img :src="userInfo.avatar_src">
                        </div>
                        <div class="user-data">
                            <div class="user-name">{{ userInfo.username }}</div>                        
                        </div>
                        <div class="other-data">
                            <div class="item">
                                <div class="top">推文</div>
                                <span>{{ userInfo.articles_num }}</span>
                            </div>
                            <div class="item">
                                <div class="top">正在关注</div>
                                <span>{{ userInfo.follows_num }}</span>
                            </div>
                            <div class="item">
                                <div class="top">关注者</div>
                                <span>{{ userInfo.fans_num }}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <!-- 文章内容 -->
                <div class="middle">
                    <div class="user-content"
                        v-for="(item, index) in article" 
                        :key="index"
                        @click="$_openReply(article[index])">
                        <div class="context">
                            <div class="content">          
                                <div class="item-header">
                                    <el-image class="the-img" :src="item.avatar_src" fit="cover">
                                        <div slot="error" class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </el-image>
                                    <strong class="username">{{ item.username }}</strong>
                                    <i class="el-icon-success success"></i>
                                    <span class="time">{{ $_formatTime(item.send_time) }}</span>
                                </div>
                                <div class="item-text-container">
                                    <span>{{ item.body }}</span>
                                    <div class="picture">
                                        <el-image class="the-img" v-if="item.pic_src" :src="item.pic_src" fit="cover"></el-image>
                                    </div>
                                </div>
                                <div class="action-list">
                                    <div class="item">
                                        <i class="el-icon-chat-line-round"></i>
                                        <span class="item-num">{{ item.comments_num }}</span>
                                    </div>
                                    <div class="item">
                                        <span class="icon iconfont">&#xeca1;</span>
                                        <span class="item-num">{{ item.zan }}</span>
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
                        <span class="refresh" @click="$_recommend">刷新</span>
                        <div class="recommend-body"
                            v-for="(item, index) in recommend"
                            :key="index">
                            <div class="item-header">
                                <el-image class="the-img" :src="item.avatar_src" fit="cover">
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                                <strong class="username">{{ item.username }}</strong>
                                <i class="el-icon-success success"></i>
                                <div class="follow">
                                    <el-button type="primary" size="mini" @click="$_follow(item.user_id)" round>关注</el-button>
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
                            <el-image class="the-img" :src="dialog.article.data.avatar_src" fit="cover">
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                            <strong class="username">{{ dialog.article.data.username }}</strong>
                            <i class="el-icon-success success"></i>
                        </div>
                        <div class="item-text-container">
                            <span>{{ dialog.article.data.body }}</span>
                            <div class="picture" >
                                <el-image class="the-img" v-if="dialog.article.data.pic_src" :src="dialog.article.data.pic_src" fit="cover"></el-image>
                            </div>
                            <span class="time">{{ $_formatTimeAll(dialog.article.data.send_time) }}</span>
                        </div>
                        <div class="action-list">
                            <div class="item">
                                <i class="el-icon-chat-line-round"></i>
                                <span class="item-num">{{ dialog.article.data.comments_num }}</span>
                            </div>
                            <div class="item">
                                <span class="icon iconfont">&#xeca1;</span>
                                <span class="item-num">{{ dialog.article.data.zan }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="reply"
                        v-for="(item, index) in comment"
                        :key="index">
                        <div class="reply-container">
                            <div class="article-dialog">
                                <div class="item-header">
                                    <el-image class="the-img" :src="item.avatar_src" fit="cover">
                                        <div slot="error" class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </el-image>

                                    <strong class="username">{{ item.username }}</strong>
                                    <span class="time">{{ $_formatTime(item.send_time) }}</span>
                                    <!-- <div class="action-list" style="position:absolute;right:40px;margin-top:10px;">
                                        <div class="item">
                                            <span class="icon iconfont">&#xeca1;</span>
                                            <span class="item-num">{{ item.zan_num }}</span>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="item-text-container">
                                    <span>{{ item.body }}</span>
                                </div>
                                <div class="action-list">
                                    <div class="item">
                                        <i class="el-icon-chat-line-round"></i>
                                        <span class="item-num">{{ }}</span>
                                    </div>
                                    <div class="item">
                                        <span class="icon iconfont">&#xeca1;</span>
                                        <span class="item-num">{{ item.zan_num }}</span>
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
    import Header from './header';

export default {
    name: "home",
    components: {
        Header
    },
    data() {
        return {
            activeTopbar: 'home',
            dialog: {
                article: {
                    show: false,
                    data: {}
                }
            },
            userInfo: {},
            article: [],
            recommend: [],
            comment: [],
        }
    },
    computed: {

    },
    methods: {
        $_home() {
            this.$router.push({name: 'home'})
        },
        $_userInfo: async function() {
            let data = await this.$api.home.$_userInfo.call(this)
            if(data !== false) {
                this.userInfo = data
            }
        },
        $_info() {
            this.$router.push({name: 'info'})
        },
        $_logout() {
            sessionStorage.clear()
            this.$router.push({name: 'login'})
        },
        //文章列表
        async $_article() {
            let params = {
                is_self: 0
            }
            let data = await this.$api.home.$_article.call(this,params)
            if(data !== false) {
                this.article = data
            }
        },
        //推荐关注
        async $_recommend() {
            let data = await this.$api.home.$_recommend.call(this)
            if(data !== false) {
                this.recommend = data
            }
        },
        //评论列表
        async $_comment(id) {
            let params = {
                article_id: id
            }
            let data = await this.$api.home.$_comment.call(this, params)
            if(data !== false) {
                this.comment = data
            }
        },
        //关注
        async $_follow(id) {
            let params = {
                user_id: id
            }
            let data = await this.$api.home.$_follow.call(this, params)
            if(data !== false) {
                this.$message.success('关注成功')
            }
        },
        //打开回复弹出框
        $_openReply(obj) {
            this.dialog.article.show = true
            console.log(obj)
            this.dialog.article.data = obj
            this.$_comment(obj.article_id)
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
        this.$_userInfo()
        this.$_article()
        this.$_recommend()
        this.userInfo = this.$store.state.userInfo
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
                        cursor: pointer;
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
