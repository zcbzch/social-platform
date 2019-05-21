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
                    <img class="icon" src="../assets/banana.png">
                    <div class="title">看看世界上的新鲜事</div>
                </div>
                <div class="bottom">
                    <div class="word">现在就加入ShineMory</div>
                    <el-button type="primary" round @click="$_openDialogRegister">注册</el-button>
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
                    <el-input placeholder="请输入账号" v-model="dialog.login.data.username" clearable></el-input>
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

        <el-dialog
            :visible.sync="dialog.register.show"
            width="460px">

            <el-steps slot="title" align-center :active="dialog.register.active" finish-status="success">
                <el-step title="第一步"></el-step>
                <el-step title="第二步"></el-step>
                <el-step title="第三步"></el-step>
            </el-steps>
            <span class="tip-size" v-if="dialog.register.active == 2">选择你感兴趣的项目</span>
            <span class="tip-size" v-else>创建你的账号</span>

            <div class="login-container" v-if="dialog.register.active == 0">
                <div class="item">
                    <div class="prefix">名字</div>
                    <el-input placeholder="请输入用户名" v-model="dialog.register.data.username" clearable></el-input>
                </div>
                <div class="item">
                    <div class="prefix">邮箱</div>
                    <el-input placeholder="请输入电子邮箱" v-model="dialog.register.data.email" show-password clearable></el-input>
                </div>
            </div>

            <div class="login-container" v-if="dialog.register.active == 1">
                <div class="item">
                    <div class="prefix">密码</div>
                    <el-input placeholder="请输入密码" v-model="dialog.register.data.password" show-password clearable></el-input>
                </div>
                <div class="item">
                    <div class="prefix">重复密码</div>
                    <el-input placeholder="请输入重复密码" v-model="dialog.register.rePassword" show-password clearable></el-input>
                </div>
                <div class="item">
                    <div class="prefix">地址</div>
                    <el-input placeholder="请输入地址" v-model="dialog.register.data.address" clearable></el-input>
                </div>
                <span v-if="wrongPassword" style="margin-left: 20px; color: red">两次密码输入不一致</span>
            </div>

            <div class="check-container" v-if="dialog.register.active == 2">
                <el-checkbox 
                    :indeterminate="dialog.register.isIndeterminate" 
                    v-model="dialog.register.checkAll" 
                    @change="handleCheckAllChange">
                    全选
                </el-checkbox>
                <el-checkbox-group style="margin-top: 15px" v-model="dialog.register.checkedInterest" @change="handleCheckedInterestChange">
                    <el-checkbox v-for="(item, index) in dialog.register.data.interest" :label="item" :key="index">{{item}}</el-checkbox>
                </el-checkbox-group>
            </div>

            <span slot="footer" class="dialog-footer footer">
                <el-button @click="dialog.register.show = false">取消</el-button>
                <el-button type="primary" @click="next" v-if="dialog.register.active !== 2">下一步</el-button>
                <el-button type="primary" @click="$_register" v-if="dialog.register.active == 2">提交</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>

const interestOptions = ['学习', '美食', '新闻', '旅游', '娱乐', '游戏']

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
                register: {
                    show: false,
                    active: 0,
                    data: {
                        username: '',
                        email: '',
                        password: '',
                        address: '',
                        interest: interestOptions,
                    },
                    rePassword: '',
                    isIndeterminate: true,
                    checkAll: false,
                    checkedInterest: [],
                },
            },
        }
    },
    computed: {
        wrongPassword() {
            return this.dialog.register.rePassword.length && 
                (this.dialog.register.data.password !== this.dialog.register.rePassword)
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
        $_openDialogRegister() {
            this.dialog.register = {
                show: true,
                active: 0,
                data: {
                    username: '',
                    email: '',
                    password: '',
                    address: '',
                    interest: interestOptions,
                },
                rePassword: '',
                isIndeterminate: true,
                checkAll: false,
                checkedInterest: [],
            }
        },
        $_login: function() {
            sessionStorage.setItem('login', 'test')
            this.$router.push({name: 'home'})
        },
        $_register: function() {
            console.log(this.dialog.register.data)
            this.dialog.register.show = false
        },
        next() {
            if (this.dialog.register.active++ >= 2) 
            this.dialog.register.active = 0;
        },
        handleCheckAllChange(val) {
            let reg = this.dialog.register
            reg.checkedInterest = val ? interestOptions : [];
            reg.isIndeterminate = false;
        },
        handleCheckedInterestChange(val) {
            let reg = this.dialog.register
            let checkedCount = val.length
            reg.checkAll = checkedCount === reg.data.interest.length
            reg.isIndeterminate = checkedCount > 0 && checkedCount < reg.data.interest.length
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
        .el-dialog__body {
            text-align: left;
        }
        .tip-size {
            margin-left: 50px;
            font-size: 22px;
            font-weight: bold;
        }
        .login-container {
            padding: 0 20px;
            margin-top: 40px;
            .item {
                width: 100%;
                height: 40px;
                margin: 20px 0;
                padding: 0 10px;
                display: flex;
                .prefix {
                    @flex-center();
                    width: 100px;
                    margin-right: 16px;
                    font-size: 18px;
                }
            }
        }
        .check-container {
            padding: 0 25px;
            margin-top: 40px;
            text-align: left;
            .el-checkbox {
                width: 120px;
                margin: 5px 0;
                text-align: center;
            }
        }
        .footer {
            margin-right: 30px;
        }
    }
</style>
