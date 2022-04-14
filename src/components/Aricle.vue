<template>
  <el-card class="box-card">
    <span>近期文章</span>
   <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="title" label="文章" width="`80%`" />
   
      
    <el-table-column prop="author" label="作者" />
  </el-table>

    <div class="page"></div>
  </el-card>
</template>
    
<script setup>
// import { getWen } from "../network/api.js";
// import { reactive } from "vue";
// import {onMounted} from 'vue'
const tableData = [
  {
    title:"文章一",
    author:"admin"
  }
]

// getWen().then((res) => {
//   Wenlist.value = res.data;
// });
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

.box-card {
  position: relative;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
}

</style>