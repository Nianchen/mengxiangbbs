<template>
  <div class="Login">
    <h1>Welcome Mengxiang</h1>
    <el-divider content-position="center">来此寻梦</el-divider>
    <div class="input">
      <span>账号：</span><input type="text" v-model="username" />
      <br />
      <span>密码：</span><input type="password" v-model="password" />
      <br />
     <el-alert title="目前不开放注册" type="warning" center style="margin-top:10px;"/>
      <div class=""></div>
      <el-button type="primary" id="login" @click="Login">登录</el-button>
    </div>
  </div>
</template>
    
<script setup >
import { ref } from "vue";
import { useRouter } from "vue-router";
//   const route = useRoute()
const router = useRouter();
const username = ref("");
const password = ref("");
const Login = function () {
  if (username.value == "admin") {
    router.push({
      path: "/index",
    });
  }

  return {
    username,
    password,
  };
};
</script>
    
<style scoped>
.Login {
  position: relative;
  text-align: center;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  box-shadow: 0 0 4px black;
  border-radius: 2%;
}
.input {
  font-size: 20px;
}
input {
  width: 58%;
  height: 25px;
  margin-top: 10px;
  color: blue;
  font-size: 18px;
  letter-spacing: 2px;
  border: 1px solid rgb(45, 45, 45);
}
.input span {
  position: absolute;
  margin-top: 10px;
  left: 10%;
}
#login {
  position: relative;
  top: 25px;
  width: 60%;
}
</style>