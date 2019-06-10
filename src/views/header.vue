<template>
    <div class="header">
    <div class="topbar">
        <div class="left">
            <div v-show="type == 'user'">
            <el-tabs v-model="activeTopbar">
                <el-tab-pane name="home">
                        <span slot="label">
                            <div class="tab-container" @click="$_home">
                                <i class="el-icon-house icon-size"></i>
                                <span class="word-size">主页</span>
                            </div>
                        </span>
                </el-tab-pane>
                <el-tab-pane name="chat">
                        <span slot="label">
                            <div class="tab-container" @click="$_chat">
                                <i class="el-icon-s-comment icon-size"></i>
                                <span class="word-size">聊天</span>
                            </div>
                        </span>
                </el-tab-pane>
                <el-tab-pane name="message">
                        <span slot="label">
                            <div class="tab-container">
                                <i class="el-icon-bell icon-size"></i>
                                <span class="word-size">
                                    <el-popover
                                            placement="top"
                                            width="300"
                                            v-model="visible">
                                        <p style="margin-left: 10px" v-show="notice.length <= 0">没有新消息了</p>
                                        <p style="margin-left: 10px" v-show="notice.length > 0">系统通知</p>
                                          <div v-for="(item, index) in notice" :key="index">
                                              <div style="text-align: left; margin: 3px 10px;">
                                                  <el-card shadow="always">
                                                      {{ item.content }}
                                                      <el-button size="mini" type="text" @click="deleteNotice(index)">确认</el-button>
                                                  </el-card>
                                              </div>
                                          </div>
                                          <el-button type="text" slot="reference">消息</el-button>
                                    </el-popover>
                                </span>
                            </div>
                        </span>
                </el-tab-pane>
            </el-tabs>
            </div>
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
<!--                            <div class="user-mail">@coderzhj</div>-->
                        </div>
                        <div class="popover-item" @click="$_info"  v-show="type == 'user'"><i class="el-icon-user"></i><span>个人信息</span></div>
                        <div class="popover-item" @click="$_logout"><i class="el-icon-back"></i><span>登出</span></div>
                    </div>

                    <div class="user" slot="reference">
                        <img :src="userInfo.avatar_src?userInfo.avatar_src:'../assets/van.png'">
                    </div>
                </el-popover>
            </el-tooltip>
            <el-button style="
                    margin-left:20px;
                    font-size: 14px;
                    font-weight: bold;"
                       type="primary"
                       size="mini"
                       round @click="pushVisible = true">
                {{ type == 'user' ?  '发推' : '发通知'}}
            </el-button>
        </div>
    </div>
    <el-dialog
            title="发送内容"
            :visible.sync="pushVisible"
            width="40%"
            center>
        <el-form ref="form3" :model="form3" label-width="80px">
            <el-form-item label="推文内容">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="form3.content">
                </el-input>
            </el-form-item>
            <el-form-item label="推文图片" v-show="type == 'user'">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-success="handlePushSuccess"
                        :file-list="form3.fileList"
                        :limit="1"
                        list-type="picture-card">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitPush">发送</el-button>
                <el-button @click="pushVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
        <el-dialog :visible.sync="bigImgVisible">
            <img width="100%" :src="bigImageUrl" alt="">
        </el-dialog>
        <router-view/>
    </div>

</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                bigImgVisible: false,
                visible: false,
                pushVisible: false,
                userInfo: {},
                bigImageUrl: '',
                activeTopbar: 'home',
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
                form3: {
                    content: '',
                    fileList: []
                },
                type: sessionStorage.getItem('type')
            }
        },
        computed: {

        },
        created() {
            axios.defaults.headers.common['Authorization'] = `ShineMory ${sessionStorage.access_token}`
        },
        methods: {
            $_chat() {
                this.$router.push({name: 'chat'})
            },
            $_userInfo: async function() {
                let data = await this.$api.home.$_userInfo.call(this)
                if(data !== false) {
                    this.userInfo = data
                    this.$store.state.userInfo = data
                }
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                this.bigImgVisible = true;
                this.bigImageUrl = file.url;
            },
            deleteNotice(index) {
                console.log(this.notice[index]);
                this.notice.splice(index, 1);
                if (this.notice.length <= 0) {
                    this.visible = false;
                }
            },
            submitPush() {
                this.pushVisible = false;
                console.log(this.form3.content);
                console.log(this.form3.url);
            },
            handlePushSuccess(response, file) {
                this.form3.url = file.url;
            },
            $_home() {
                this.$router.push({name: 'home'})
            },
            $_authority() {
                let author_id = sessionStorage.getItem('login')
                if(author_id) return
                else {
                    this.$router.push({name: 'login'})
                }
            },
            $_info() {
                this.$router.push({name: 'info'})
            },
            $_logout() {
                sessionStorage.clear()
                this.$router.push({name: 'login'})
            }
        },
        mounted() {
            this.$_userInfo()
            if (this.type == 'user') {
                this.$router.push({name: 'home'})
            } else {
                this.$router.push({name: 'admin'})
            }
        }
    };
</script>

<style lang="less">
    @flex-center: {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header {
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
    }
</style>

