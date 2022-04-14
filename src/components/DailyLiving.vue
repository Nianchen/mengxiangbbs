<template>
  <div>
    <span>活动安排</span>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="21级" name="first">
        <div class="time">
          <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="20级" name="second">
      <div class="time">
          <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
        </div>
      </el-tab-pane>
      <el-tab-pane label="团建" name="third">快乐团建</el-tab-pane>
    </el-tabs>
  </div>
</template>
    
<script setup >
import { ref } from "vue";

const activeName = ref("first");
const activities = [
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
];
const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
    
<style>
.time{
  position: relative;
  left: -8%;
  top: 20px;
}
</style>
