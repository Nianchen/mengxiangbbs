<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>文章列表</span>
      </div>
    </template>
    <div v-for="o in 10" :key="o" class="text item">
    <i> <img src="../assets/文章.png" alt=""></i> 
     <a href="#">{{ "List item " + o }}</a> 
    </div>
    <div class="page"></div>
  </el-card>
</template>
    
<script setup>
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
.item a:hover{
  color: blue;
}
.box-card {
  width: 100%;
}
i img{
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>