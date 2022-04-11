<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>文章列表</span>
      </div>
    </template>
    <div v-for="o in 8" :key="o" class="text item">{{ "List item " + o }}</div>
    <div class="page">
      <!-- <el-pagination  pager-count="5" :hide-on-single-page="value" background layout="prev, pager, next" :total="200" /> -->
    </div>
  </el-card>
</template>
    
<script setup>
// import { ref } from 'vue'
// const value = ref(false)
</script>
    
<style>
.box-card {
  position: relative;
  top: 20px;
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
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.box-card {
  width: 100%;
}
.page {
  position: relative;
  left: 22%;

}
</style>