<template>
    <div>
        <span>活动缩影</span>
         <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="21级" name="first">21</el-tab-pane>
    <el-tab-pane label="20级" name="second">20</el-tab-pane>
     <el-tab-pane label="团建" name="third">快乐团建</el-tab-pane>

  </el-tabs>
    </div>
</template>
    
<script setup >
 import { ref } from 'vue'
// import { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
    
<style>
    .demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
