<template>
  <div class="concant">
    <div class="Detail">
        <div class="title">
              <h2>测试文章</h2>
              <hr>
              作者：test 发布时间：2022-12-21
        </div>
      <p>
       
       
        当你发现两个数据相等并且自定义排序函数会在这时候返回结果为true，那你就要小心了，你的自定义排序函数写的有问题。有兴趣可以查看C++源码，欢迎讨论。
      </p>
    </div>
    <div class="Comment">
        评论
    </div>
    <div class="Author">
        作者
    </div>
    <div class="hotlist">
        热门文章
    </div>
  </div>
</template>
    
<script setup>
</script>
    
<style>
.concant {
  position: relative;
  background-color:#edf0f2;
}
.Detail {
  position: relative;
  width: 45%;
  left: 45%;
  padding: 30px;
  transform: translateX(-50%);
 
  /* overflow: scroll; */
  background-color: white;
}
.Comment{
position: relative;
  width: 45%;
  left: 45%;
  padding: 30px;
  transform: translateX(-50%);
  /* overflow: scroll; */
   margin-top: 15px;
  background-color: white;
    border-top: 1px solid black;
}
.Author{
    position: absolute;
    width: 22%;
    height: 200px;
    border: 1px solid black;
    right: 5%;
    top: 0;
}
.title{
   
    font-family: var(--font-family);
    font-weight: 500;
    color: #3d3d3d;
    line-height: 1.1;
}
.hotlist{
     position: absolute;
    width: 22%;
    height: 300px;
    border: 1px solid black;
    right: 5%;
    top: 240px;
}
p{
    margin-top:20px ;
  
}
</style>