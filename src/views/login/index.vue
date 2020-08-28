<template>
  <div class="login-container">
    <div class="login">
      <div class="form-box">
        <div class="img" />
        <div class="login-img-box">
          <div class="login-fixed">
            <div class="title"> 系统登录 </div>
            <div class="form-el">
              <el-form
                ref="loginForm"
                size="mini"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                auto-complete="on"
                label-position="right"
                hide-required-asterisk
              >
                <el-form-item prop="username">
                  <span class="svg-container">
                    <svg-icon icon-class="user" />
                  </span>
                  <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="请输入用户名"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                  />
                </el-form-item>

                <el-form-item prop="password">
                  <span class="svg-container">
                    <svg-icon icon-class="password" />
                  </span>
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="请输入密码"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                  />
                  <span class="show-pwd" @click="showPwd">
                    <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                  </span>
                </el-form-item>
                <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="floor">
      版权所有 ©2019 陕西华春网络科技股份有限公司 备案号：陕ICP备06011814号-6
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名称'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/*
@supports 修复光标使用Chrome记录的账号之后变黑色;
完善记住密码之后颜色和背景不一致;
*/

$bg:#e8f0fe;
$light_gray:#333;
$cursor: #333;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {//不用IE我们大家都是好朋友
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 100%;
    width: 85%;
    display: flex;
    align-items: center;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 30px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-form-item__content {
      height: 36px;
      position: relative;
      font-size: 14px;
      display: flex;
      align-items: center;
  }
}
</style>

<style lang="scss" scoped>
$dark_gray:#afc8d3;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url('./../../assets/login/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  .login{
    height: calc(100vh - 40px) !important;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-box{
      height: 400px;
      width: 857px;
      .img{
        height: 64px;
        // background-image: url('../../assets/login/logo.jpg');
        background-repeat: no-repeat;
        background-size: contain;
      }
      .login-img-box{
        height: 336px;
        background-image: url('../../assets/login/dl.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .login-fixed{
          position: absolute;
          width: 260px;
          top: 18px;
          bottom: 30px;
          right: 2px;
          .title{
            height: 68px;
            line-height: 68px;
            text-align: center;
            font-size: 20px;
            color: #0082cd;
          }
          .form-el{//表单容器
            padding: 10px;
          }
        }
      }
    }
  }
  .floor{
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #FFF;
    font-size: 12px;
  }

  .login-form {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .svg-container {
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
