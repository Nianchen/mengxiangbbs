<template>
  <div class="TopMenu">
    <div class="log">Logo</div>
    <div class="Function">
      <el-menu
        :default-active="`/index`"
        class="el-menu-demo"
        mode="horizontal"
      
        :router="true"
        
      >
        <el-menu-item index="/index">主页</el-menu-item>
        <el-menu-item index="/materials">学习资料</el-menu-item>
        <el-menu-item index="/detail">乱七八糟</el-menu-item>
        <el-menu-item index="other">等等</el-menu-item>
      </el-menu>
    </div>
    <div class="Login">
      <el-button type="success" >
        <router-link to="Login">登录</router-link>
      
        </el-button>
    </div>
  
  </div>
</template>
    
<script setup>

</script>
    
<style scoped>
.TopMenu {
  position: relative;
  float: left;
  width: 100%;
  height: 58px;
  background-color: white;
  border-bottom: solid 1px #dcdfe6;
}
.Function {
  position: absolute;
  width: 50%;
  left: 30%;
}
.log {
  position: absolute;
   top: 50%;
  transform: translateY(-50%);
  left: 20%;
}
.Login {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
}
</style>