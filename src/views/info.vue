<template>
    <div class="home" style="background-color:#E6ECEF;">

        <div class="profile">
            <div class="ProfileCanopy-inner">
                <div class="ProfileCanopy-header" style="margin-top:0px">
                    <div class="AppContainer">
                        <div class="ProfileCanopy-avatar">
                            <div class="ProfileAvatar" @click="uploadVisible = true">
                                <img class="ProfileAvatar-image"
                                     :src="userInfo.avatar_src?userInfo.avatar_src:'../assets/van.png'">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ProfileCanopy-navBar">
                    <div class="AppContainer">
                        <div  class="Grid">
                            <div class="Grid-cell"/>
                            <div class="Grid-cell" style="width: 75%!important;">
                                <div class="ProfileNav">
                                    <ul class="ProfileNav-list">
                                        <li :class="tab === 'tweets' ? 'ProfileNav-item is_active' : 'ProfileNav-item'">
                                            <div class="ProfileNav-stat"  @click="$_tab('tweets')">
                                                <span class="ProfileNav-label">推文</span>
                                                <span class="ProfileNav-value">{{ userInfo.articles_num || '3' }}</span>
                                            </div>
                                        </li>
                                        <li :class="tab === 'following' ? 'ProfileNav-item is_active' : 'ProfileNav-item'">
                                            <div class="ProfileNav-stat" @click="$_tab('following')">
                                                <span class="ProfileNav-label">正在关注</span>
                                                <span class="ProfileNav-value">{{ userInfo.follows_num || '5' }}</span>
                                            </div>
                                        </li>
                                        <li :class="tab === 'followed' ? 'ProfileNav-item is_active' : 'ProfileNav-item'">
                                            <div class="ProfileNav-stat" @click="$_tab('followed')">
                                                <span class="ProfileNav-label">关注者</span>
                                                <span class="ProfileNav-value">{{ userInfo.fans_num || '2' }}</span>
                                            </div>
                                        </li>
                                        <li class='ProfileNav-item'>
                                            <div class="UserActions" style="margin-left:450px">
                                                <el-button style="padding: 10px 10px" round @click="$_updateInfo">修改个人信息</el-button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-container">
                    <div class="AppContent-main">
                        <div class="Grid">
                            <div class="Grid-cell u-lg-size1of4">
                                <div class="Grid">
                                    <div class="Grid-cell">
                                        <div class="ProfileHeaderCard">
                                            <h1>{{ userInfo.username }}</h1>
                                            <div>
                                                <span>加入于 {{ $_formatTimeAll(userInfo.member_since) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="Grid-cell u-lg-size3of4">
                                <div class="Grid-cell u-lg-size2of3" v-show="tab === 'tweets'">
                                    <div class="user-content"
                                         v-for="(item, index) in article"
                                         :key="index">
                                        <div class="context">
                                            <div class="content">
                                                <div  @click="$_openReply(index)">
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
                                                </div>
                                                <div class="action-list">
                                                    <div class="item">
                                                        <div  @click="$_openReply(index)">
                                                            <i class="el-icon-chat-line-round"></i>
                                                            <span class="item-num">221</span>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <span class="icon iconfont">&#xeca1;</span>
                                                        <span class="item-num">1万</span>
                                                    </div>
                                                    <div class="item" @click="changeVisible(index)">
                                                        <i class="el-icon-delete"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="Grid-cell" v-show="tab === 'following'">
                                    <div class="GridTimeline" style="margin-top:10px">
                                        <div class="Grid">
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #FAB81E"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #FAB81E"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #FAB81E"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #FAB81E"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #FAB81E"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Grid-cell" v-show="tab === 'followed'">
                                    <div class="GridTimeline" style="margin-top:10px">
                                        <div class="Grid">
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #1CA1F2"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Grid-cell u-mb10">
                                                <div class="ProfileCard">
                                                    <div class="ProfileCard-bg" style="background-color: #80C1F8"/>
                                                    <div class="ProfileCard-content">
                                                        <div class="ProfileCard-avatarLink">
                                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1134489351709110272/33JDNE7Y_bigger.png" alt=""/>
                                                        </div>
                                                        <div class="ProfileCard-actions">
                                                            <div class="u-textLeft">
                                                                <button type="button" class="following-text">
                                                                    <span>正在关注</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="ProfileCard-userFields">
                                                            <div class="ProfileNameTruncated">老夫写代码</div>
                                                            <p class="ProfileCard-bio">邮箱：xxx@xx.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <el-dialog
                :visible.sync="dialog.form.show"
                width="640">
            <div class="dialog-container">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="标签">
                        <el-select v-model="form.tags" multiple placeholder="请选择">
                            <el-option
                                    v-for="item in ['学习','美食','新闻','旅游','娱乐','游戏']"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入内容"
                                v-model="form.motto">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="$_userInfoChange">提交修改</el-button>
                        <el-button @click="$_cancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>

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

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                center>
            <span>是否确认删除此推文</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteTweet">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="上传图片"
                :visible.sync="uploadVisible"
                width="40%"
                center>
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-success="handleSuccess"
                        :file-list="form2.fileList"
                        list-type="picture-card">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
        </el-dialog>
        <el-dialog :visible.sync="bigImgVisible">
            <img width="100%" :src="bigImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    import Header from './header'
    export default {
        name: "home",
        components: {
            Header
        },
        data() {
            return {
                visible: false,
                bigImgVisible: false,
                pushVisible: false,
                bigImageUrl: 'https://pbs.twimg.com/profile_images/993799221559025664/FFcEtWpM_400x400.jpg',
                imgUrl: 'https://pbs.twimg.com/profile_images/993799221559025664/FFcEtWpM_400x400.jpg',
                activeTopbar: 'home',
                dialog: {
                    article: {
                        show: false
                    },
                    form: {
                        show: false,
                    }
                },
                article: [
                    {},
                    {},
                    {}
                ],
                userInfo: {},
                notice: [
                    {
                        id: 1,
                        content: "这是一条系统通知"
                    },
                    {
                        id: 2,
                        content: "2这是一条系统通知"
                    },
                    {
                        id: 3,
                        content: "3这是一条系统通知"
                    }
                ],
                tab: 'tweets',
                form: {
                    nickname: '',
                    address: '',
                    tags: [],
                    motto: ''
                },
                dialogVisible: false,
                deleteId: 0,
                uploadVisible: false,
                form2: {
                    fileList: [
                        {
                            name: 'food.jpeg',
                            url: 'https://pbs.twimg.com/profile_images/993799221559025664/FFcEtWpM_400x400.jpg'
                        }
                    ]
                },
                form3: {
                    url: '',
                    fileList: [],
                    content: ''
                }
            }
        },
        computed: {

        },
        methods: {
            handleSuccess(response, file, fileList) {
                this.imgUrl = file.url;
                fileList.shift();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                this.bigImgVisible = true;
                this.bigImageUrl = file.url;
            },
            deleteTweet() {
               console.log("删除推文" + this.deleteId);
            },
            changeVisible(index) {
                this.deleteId = index;
                this.dialogVisible = !this.dialogVisible;
            },
            $_cancel() {
                this.dialog.form.show = false;
            },
            $_updateInfo() {
                this.dialog.form.show = true;
            },
            $_tab(str) {
                this.tab = str;
            },
            async $_userInfoChange() {
                let params = {
                    username: this.form.nickname,
                    address: this.form.address,
                    about_me: this.form.motto,
                    interest: this.form.tags,
                }
                let data = await this.$api.home.$_userInfoChange.call(this,params)
                if(data !== false) {
                    this.$message.success("修改成功")
                    this.dialog.form.show = false;
                }
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
            this.userInfo = this.$store.state.userInfo
        }
    }
</script>

<style lang="less">
    @flex-center: {
        display: flex;
        justify-content: center;
        align-items: center;
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

    .profile {
        display: block;
        .ProfileCanopy-inner {
            position: relative;
            width: 100%;
            z-index: 4;
            .ProfileCanopy-header {
                display: block;
                position: absolute;
                height: 175px;
                transition: height .3s;
                max-width: 2560px;
                box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
                position: relative;
                z-index: 3;
                background-color: #1DA1F2 !important;
            }

            .ProfileCanopy-navBar {
                background-color: #fff;
                box-sizing: border-box;
                height: 60px;
                box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
            }
            .AppContainer {
                height: 100%;
                position: relative;
                max-width: 1190px;
                margin: 0 auto;
                .Grid {
                    display: block;
                    font-size: 0;
                    margin: 0 -5px;
                    padding: 0;
                    text-align: left;
                }
                .Grid-cell {
                    box-sizing: border-box;
                    display: inline-block;
                    font-size: 14px;
                    margin: 0;
                    text-align: left;
                    vertical-align: top;
                    width: 25%!important;
                    .ProfileNav {
                        height: 60px;
                        position: relative;
                        margin-bottom: -1px;
                        ul {
                            margin: 0;
                            list-style: none;
                            padding: 0;
                            .ProfileNav-item {
                                display: inline-block;
                                text-align: inherit;
                                .ProfileNav-stat {
                                    height: 60px;
                                    box-sizing: border-box;
                                    border-bottom: 0 solid;
                                    display: block;
                                    line-height: 1;
                                    padding: 14px 15px 7px;
                                    transition: all .15s ease-in-out;
                                    text-align: center!important;
                                    border-color: #1DA1F2 !important;
                                    cursor: pointer;
                                    .ProfileNav-label {
                                        display: block;
                                        color: #657786;
                                        font-weight: bold;
                                        font-size: 12px;
                                        letter-spacing: .02em;
                                        transition: color .15s ease-in-out;
                                    }
                                    .ProfileNav-value {
                                        display: block;
                                        color: inherit;
                                        font-size: 18px;
                                        font-weight: bold;
                                        padding-top: 3px;
                                        transition: color .15s ease-in-out;
                                    }
                                }
                            }
                            .is_active {
                                border-color: #657786;
                                color: #657786;
                                cursor: default;
                                .ProfileNav-stat {
                                    border-bottom-width: 2px;
                                    .ProfileNav-value {
                                        color: #1DA1F2;
                                    }
                                }
                            }
                            .u-textRight {
                                background-color: #fff;
                                box-sizing: border-box;
                                height: 59px;
                                padding: 12px 0 0 2px;
                                position: absolute;
                                right: 0;
                                top: 0;
                                text-align: right!important;
                                float: right!important;
                                .UserActions {
                                    display: block;
                                    text-align: left!important;
                                }
                            }
                        }
                    }
                }
                .ProfileCanopy-avatar {
                    bottom: -87px;
                    left: 10px;
                    position: absolute;
                    transition: bottom .3s;
                    z-index: 3;
                    .ProfileAvatar {
                        background: #fff;
                        border: 5px solid #fff;
                        border-radius: 50%;
                        height: 200px;
                        position: relative;
                        width: 200px;
                        .ProfileAvatar-image {
                            border-radius: 50%;
                            height: 100%;
                            left: 0;
                            position: absolute;
                            top: 0;
                            width: 100%;
                            transition: box-shadow .15s ease-in-out;
                        }
                    }
                }
            }

            .info-container {
                max-width: 1190px;
                margin: 0 auto;
                display: block;
                .AppContent-main {
                    float: none;
                    margin: 0;
                    border-radius: 0;
                    position: relative;
                    width: auto;
                    .user-content {
                        margin-top: 15px;
                        margin-bottom: 20px;
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
                    .Grid {
                        margin: 0 -5px;
                        display: block;
                        font-size: 0;
                        margin: 0;
                        padding: 0;
                        text-align: left;
                    }
                    .Grid-cell {
                        box-sizing: border-box;
                        display: inline-block;
                        padding: 0 5px;
                        font-size: 14px;
                        margin: 0;
                        text-align: left;
                        vertical-align: top;
                        width: 100%;
                    }
                    .GridTimeline {
                        margin-bottom: 50px;
                        position: relative;
                    }
                    .u-lg-size1of4 {
                        width: 25%!important;
                    }
                    .u-lg-size3of4 {
                        width: 75%!important;
                    }
                    .u-lg-size2of3 {
                        width: 66.66666666666%!important;
                    }
                    .u-mb10 {
                        margin-bottom: 10px!important;
                        width: 33.33333333333333%!important;
                        .ProfileCard {
                            background-color: #fff;
                            border: 1px solid #e6ecf0;
                            box-sizing: border-box;
                            text-align: left;
                            .ProfileCard-bg {
                                background-position: 0 50%;
                                background-size: 100%;
                                display: block;
                                height: 90px;
                            }
                            .ProfileCard-content {
                                margin: 13px 15px;
                                position: relative;
                                .ProfileCard-avatarLink {
                                    background-color: #fff;
                                    border-radius: 50%;
                                    display: inline-block;
                                    margin: -45px 2px 0 -3px;
                                    padding: 3px;
                                    position: relative;
                                    vertical-align: bottom;
                                    z-index: 1;
                                    .ProfileCard-avatarImage {
                                        border-radius: 50%;
                                        display: block;
                                        height: 70px;
                                        width: 70px;
                                    }
                                }
                                .ProfileCard-actions {
                                    display: inline-block;
                                    height: 35px;
                                    margin: 0 0 -4px 0;
                                    position: absolute;
                                    right: 0;
                                    vertical-align: bottom;
                                    .u-textLeft {
                                        text-align: left!important;
                                        .following-text {
                                            min-width: 89px;
                                            text-align: center;
                                            background-color: #4AB3F4;
                                            border: 1px solid #1da1f2;
                                            color: #fff;
                                            border-radius: 100px;
                                            box-shadow: none;
                                            cursor: pointer;
                                            font-weight: bold;
                                            position: relative;
                                            white-space: nowrap;
                                            transition: box-shadow .15s ease-in-out;
                                            outline:none;
                                        }
                                    }
                                }
                                .ProfileCard-userFields {
                                    color: #14171a;
                                    margin-top: 8px;
                                    width: 100%;
                                    display: block;
                                    .ProfileNameTruncated {
                                        height: 22px;
                                        line-height: 1.3;
                                        margin-top: -2px;
                                        display: inline-block!important;
                                        max-width: 100%;
                                        overflow: hidden!important;
                                        text-overflow: ellipsis!important;
                                        white-space: nowrap!important;
                                        word-wrap: normal!important;
                                        font-size: 18px;
                                        font-weight: bold;
                                        padding-right: 2px;
                                        word-break: break-all;
                                        color: inherit!important;
                                    }
                                    .ProfileCard-screenname {
                                        line-height: 1;
                                        margin-bottom: 10px;
                                        color: #66757f;
                                        font-size: 14px;
                                        font-weight: normal;
                                        text-decoration: none!important;
                                    }
                                    .ProfileCard-bio {
                                        color: #14171a;
                                        font-weight: normal;
                                        word-wrap: break-word;
                                        overflow: hidden;
                                        font-size: 14px;
                                        line-height: 1.375em;
                                        height: 5.5em;
                                        margin-top: 8px;
                                        direction: ltr!important;
                                        text-align: left!important;
                                        unicode-bidi: embed;
                                    }
                                }
                            }
                        }
                    }
                    .ProfileHeaderCard {
                        margin-bottom: 16px;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-top: 35px;
                        display: block;
                    }
                }
            }
        }
    }
</style>


