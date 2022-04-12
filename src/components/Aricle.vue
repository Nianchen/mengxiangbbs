<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>文章列表</span>
      </div>
    </template>
   
     <div v-for="(item,index) in Wenlist.value" :key="index" class="text item">
      <i> <img src="../assets/文章.png" alt="" /></i>
      <a href="#">{{'作者：'+item.author+'   '+item.title}}    <span>></span> </a>
  
    </div>
  
   
    <div class="page"></div>
  </el-card>
</template>
    
<script setup>
import { getWen } from "../network/api.js";
import { reactive} from 'vue'
// import {onMounted} from 'vue'
const Wenlist = reactive([])


getWen().then(res=>{
    Wenlist.value =  res.data
})  

</script>
    
<style>
.box-card {
  position: relative;
  top: 20px;
  height: 100%;
}
.box-card:hover {
  box-shadow: 0 0 8px black;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 24px;
}

.item {
  height: 35px;
  line-height: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}
.item a:hover {
  color: blue;
}
.box-card {
  width: 100%;
}
i img {
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
}
a span{
  float: right;
}
</style>