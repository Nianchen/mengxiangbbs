<template>
  <div class="index">
      <OneYan class="OneYan"></OneYan>
          <div class="swiper">
            <el-carousel height="400px" width="80%">
              <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
    <div class="About">
      <p>About me//公告</p>
      <p>『~我们以Web开发延伸出完备的<strong>前后端技术栈</strong> ，可以独立开发基于主流前后端框架的Web应用~』</p>
    <p>工作室学习氛围良好，成员热情似火，互帮互助。</p>
    </div>
    <div class="ArticleList">
      <keep-alive>
      <Aricle></Aricle>
      </keep-alive>
        
    </div>
    <div class="Daily">
        <DailyLiving></DailyLiving>
    </div>
  </div>
</template>
    
<script setup >
import Aricle from '../components/Aricle.vue'
import DailyLiving from '../components/DailyLiving.vue'
import OneYan from "../components/OneYan.vue";
import {onActivated} from 'vue'

 onActivated(()=>{
            console.log('我是 keep-alive 存在的2')
        })
</script>
    
<style>
.index {
  width: 100%;
  position: relative;
  /* overflow: scroll; */
}
.OneYan {
  position: absolute;
  width: 20%;
  top: 0;
  left: 12%;
}
.swiper {
  width: 18%;
  position: absolute;
  left: 1%;
  top: 25%;
}
.About {
  color: #646464;
  position: relative;
  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 0 3px black;
  text-align: left;
  padding: 10px;
}
.About:hover{
  box-shadow: 0 0 8px black;
}
.ArticleList{
  position: relative;
  width: 60%;
  height:55vh;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
}
.Daily{
  position: absolute;
  width: 20%;
  height: 50%;
  left: 80%;
  top: 0;
}
</style>