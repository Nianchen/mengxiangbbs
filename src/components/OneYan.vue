<template>
  <div class="OneYan">
    <h3>每日毒药</h3>
    <p>{{ demo }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const demo = ref("123");

    return {
      demo,
    };
  },
};
</script>

<style>
.OneYan {
  color: #646464;
  position: relative;
  width: 70%;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 0 3px black;
  text-align: center;
  padding: 10px;
  /* border-radius: 5%; */
}
.OneYan:hover {
  box-shadow: 0 0 8px black;
}
p {
  margin-top: 2%;
  font-size: 15px;
  font-weight: 100;
}
</style>