<template>
    <div class="login">
        <div class="left">
            <div class="container">
                <div class="item"><i class="el-icon-search icon-size"></i>关注你的兴趣所在</div>
                <div class="item"><i class="el-icon-user icon-size"></i>听听大家在谈论什么</div>
                <div class="item"><i class="el-icon-chat-round icon-size"></i>加入对话</div>
            </div>
        </div>

        <div class="right">
            <div class="container">
                <div class="top">
                    <img class="icon" src="../assets/mylogo.png">
                    <div class="title">看看世界上的新鲜事</div>
                </div>
                <div class="bottom">
                    <div class="word">现在就加入shine暮里</div>
                    <el-button type="primary" round>注册</el-button>
                    <el-button style="border: 1px solid #409EFF" round @click="$_openDialogLogin">登录</el-button>
                </div>
                
            </div>
        </div>

        <el-dialog
            :visible.sync="dialog.login.show"
            width="460px">
            <span slot="title" class="title-size">账号登录</span>
            <div class="login-container">
                <div class="item">
                    <div class="prefix">帐号</div>
                    <el-input placeholder="请输入密码" v-model="dialog.login.data.username" clearable></el-input>
                </div>
                <div class="item">
                    <div class="prefix">密码</div>
                    <el-input placeholder="请输入密码" v-model="dialog.login.data.password" show-password clearable></el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer footer">
                <el-button @click="dialog.login.show = false">取消</el-button>
                <el-button type="primary" @click="$_login">登录</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            dialog: {
                login: {
                    show: false,
                    data: {
                        username: '',
                        password: '',
                    }
                },
                register: {},
            },
        }
    },
    methods: {
        $_openDialogLogin() {
            this.dialog.login = {
                show: true,
                data: {
                    username: '',
                    password: '',
                }
            }
        },
        $_login: function() {
            sessionStorage.setItem('login', 'test')
            this.$router.push({name: 'home'})
        }
    },
}
</script>

<style lang="less">
    @flex-center: {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login {
        height: 100%;
        display: flex;
        .left {
            width: 50%;
            height: 100%;
            background-color: #409EFF;
            @flex-center();
            .container {
                width: 240px;
                height: 264px;
                text-align: left;
                .item {
                    height: 24px;
                    margin: 48px 0;
                    line-height: 24px;
                    display: flex;
                    font-size: 18px;
                    font-weight: bold;
                    color: #fff;
                    .icon-size {
                        margin-right: 16px;
                        transform: translateY(-4px);
                        font-size: 32px;
                    }
                }
            }
        }
        .right {
            width: 50%;
            height: 100%;
            @flex-center();
            .container {
                width: 260px;
                height: 300px;
                text-align: left;
                .top {
                    height: 150px;
                    .icon {
                        width: 45px;
                        height: 40px;
                        margin: 16px 0;
                    }
                    .title {
                        font-size: 28px;
                        font-weight: bold;
                    }
                }
                .bottom {
                    display: flex;
                    flex-direction: column;
                    .word {
                        font-size: 23px;
                        font-weight: bold;
                        margin: 7px 0;
                    }
                    .el-button {
                        margin: 7px 0;
                    }
                }
                
            }
        }
        .title-size {
            font-size: 28px;
            font-weight: bold;
        }
        .login-container {
            padding: 0 20px;
            .item {
                width: 100%;
                height: 40px;
                margin: 20px 0;
                padding: 0 10px;
                display: flex;
                .prefix {
                    @flex-center();
                    width: 80px;
                    margin-right: 16px;
                    font-size: 20px;
                }
            }
        }
        .footer {
            margin-right: 30px;
        }
    }
</style>
