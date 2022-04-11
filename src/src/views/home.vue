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
          <router-view class="Xiang"></router-view>
           
          </el-col>
        </el-row>
      </div>

      <div class="" style="position: relative">
        <div class="footer">
          <h1>123</h1>
        </div>
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
  height: 100vh;
  background-color: #edf0f2;
  /* animation:liuguang 2s infinite linear; */
}
.menu{
  height: 10%;
}
.function{
  height: 90%;
}
.Xiang {
  position: relative;
  top: 20px;
}
.footer {
  position: absolute;
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
@keyframes liuguang {
  0% {
    background: linear-gradient(
      to bottom right,
      #23bb9c 0%,
      #ff006f 100%,
      #23bb9c 200%,
      #ff006f 300%
    );
  }

  5% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -10%,
      #ff006f 90%,
      #23bb9c 190%,
      #ff006f 290%
    );
  }

  10% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -20%,
      #ff006f 80%,
      #23bb9c 180%,
      #ff006f 280%
    );
  }

  15% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -30%,
      #ff006f 70%,
      #23bb9c 170%,
      #ff006f 270%
    );
  }

  20% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -40%,
      #ff006f 60%,
      #23bb9c 160%,
      #ff006f 260%
    );
  }

  25% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -50%,
      #ff006f 50%,
      #23bb9c 150%,
      #ff006f 250%
    );
  }

  30% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -60%,
      #ff006f 40%,
      #23bb9c 140%,
      #ff006f 240%
    );
  }

  35% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -70%,
      #ff006f 30%,
      #23bb9c 130%,
      #ff006f 230%
    );
  }

  40% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -80%,
      #ff006f 20%,
      #23bb9c 120%,
      #ff006f 220%
    );
  }

  45% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -90%,
      #ff006f 10%,
      #23bb9c 110%,
      #ff006f 210%
    );
  }

  50% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -100%,
      #ff006f 0%,
      #23bb9c 100%,
      #ff006f 200%
    );
  }

  55% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -110%,
      #ff006f -10%,
      #23bb9c 90%,
      #ff006f 190%
    );
  }

  60% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -120%,
      #ff006f -20%,
      #23bb9c 80%,
      #ff006f 180%
    );
  }

  65% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -130%,
      #ff006f -30%,
      #23bb9c 70%,
      #ff006f 170%
    );
  }

  70% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -140%,
      #ff006f -40%,
      #23bb9c 60%,
      #ff006f 160%
    );
  }

  75% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -150%,
      #ff006f -50%,
      #23bb9c 50%,
      #ff006f 150%
    );
  }

  80% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -160%,
      #ff006f -60%,
      #23bb9c 40%,
      #ff006f 140%
    );
  }

  85% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -170%,
      #ff006f -70%,
      #23bb9c 30%,
      #ff006f 130%
    );
  }

  90% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -180%,
      #ff006f -80%,
      #23bb9c 20%,
      #ff006f 120%
    );
  }

  95% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -190%,
      #ff006f -90%,
      #23bb9c 10%,
      #ff006f 110%
    );
  }

  100% {
    background: linear-gradient(
      to bottom right,
      #23bb9c -200%,
      #ff006f -100%,
      #23bb9c 0%,
      #ff006f 100%
    );
  }
}
</style>