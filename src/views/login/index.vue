<template>
  <div style="background-color: #4271e1">
    <div class="login-header">
      <div class="login-main">
        <div class="system-title">CQUT点餐平台</div>
      </div>
    </div>
    <div class="login-container">
      <div class="login-main">
        <div class="show">
          <img src="@/assets/manage-bg.png" />
        </div>
        <div class="show02">
          <div class="box">
            <div class="title">系统登录</div>
            <el-form ref="loginForm" :model="form" :rules="rules">
              <el-form-item prop="account">
                <el-input
                  v-model="form.account"
                  class="login-user"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="form.password"
                  class="login-pwd"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="login"
                  class="login-btn"
                  :loading="false"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginUserApi } from "@/api/user/index";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  account: "",
  password: "",
  type: 0,
});
const rules = {
  account: [{ required: true, message: "用户名不能为空" }],
  password: [{ required: true, message: "密码不能为空" }],
};

const router = useRouter();

const login = async () => {
  const res = await loginUserApi(form);
  if (res.code == 200) {
    router.push("dashboard");
  }
};
</script>

<style scoped>
.login-header {
  width: 100%;
  height: 50px;
  background: #323232;
  box-shadow: 0 1px 8px rgb(0 0 0 / 6%);
  position: absolute;
  z-index: 1005;
}

.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #4271e1;
}

.login-main {
  height: 100%;
  margin: auto;
}

.system-title {
  position: absolute;
  margin: 9px auto 9px 100px;
  font-size: 24px;
  font-weight: bold;
  color: #7caaff;
}

.show {
  height: 100%;
  float: left;
  position: relative;
  bottom: 0;
  left: 10%;
  /* top: 50px; */
  /* padding-top: 60px; */
  width: 40%;
}

.show02 {
  height: 100%;
  float: right;
  position: relative;
  bottom: 0;
  right: 10%;
  /* top: 50px; */
  /*padding-top: 60px;*/
  width: 30%;
}

.show img {
  width: 100%;
  /* height: 100%; */
  display: block;
  margin-top: 30%;
}

.box {
  position: absolute;
  width: 100%;
  /*padding: 20px 40px;*/
  float: right;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 50%;
}

.box .title {
  padding-top: 20px;
  padding-left: 20px;
  font-size: 18px;
}

.login-btn {
  width: 100%;
  background-color: #4271e1;
  border: 0px;
}

.login-btn:hover {
  width: 100%;
  background-color: #7caaff;
  border: 0px;
}

.login-user >>> .el-input__inner {
  background: url("@/assets/user.png") no-repeat 10px;
  padding-left: 30px;
}

.login-pwd >>> .el-input__inner {
  background: url("@/assets/password.png") no-repeat 10px;
  padding-left: 30px;
}

.login-footer {
  position: absolute;
  bottom: 0px;
  height: 20%;
  width: 100%;
  text-align: center;
  color: #999999;
  padding-top: 20px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #f0f0ee;
}

.el-form {
  padding: 30px;
}
</style>
