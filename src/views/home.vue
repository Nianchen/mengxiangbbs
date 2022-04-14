<template>
  <div>
    <div class="Banner">
      <el-row class="layout-header">
        <el-col :span="24">
          <div id="Banner">
            <Banner></Banner>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="view">
      <div class="menu">
        <el-row>
          <el-col :span="24">
            <TopMenu></TopMenu>
          </el-col>
        </el-row>
      </div>
      <div class="function">
        <el-row>
          <el-col :span="24">
            <div class="Xiang">
              <router-view v-slot="{ Component }">
             
                  <keep-alive >
                    <component :is="Component" />
                  </keep-alive>
            
              </router-view>
              <!-- <router-view></router-view> -->
            </div>
          </el-col>
        </el-row>
      </div>

   
       
  
    </div>
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import TopMenu from "../components/TopMenu.vue";
// import OneYan from "../components/OneYan.vue";
</script>

<style>
.view {
  width: 100%;
  background-color: #edf0f2;
  height: 100vh;
  /* animation:liuguang 2s infinite linear; */
}
.menu {
  height: 10%;
}
.function {
  height: 90%;
}
.Xiang {
  position: relative;
  top: 20px;
}
.footer {
 position: relative;
 bottom: 0;
  width: 100%;
  height: 50px;
  background-color: black;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>