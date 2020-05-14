<template>
  <div class="receive">
    <div class="top">任务奖励</div>
    <div class="getItemPlace">
      <GetItem :type="'exp'" :number="exp"/>
      <GetItem :type="'workpiece'" :number="workpiece"/>
    </div>
    <div class="check" @click="$emit('exit')">确定</div>
  </div>
</template>

<script>
  import GetItem from "../../common/getItem/GetItem";

  export default {
    name: "Receive",
    components: {
      GetItem
    },
    props: {
      exp: Number,
      workpiece: Number
    }
  }
</script>

<style scoped>
  .receive {
    width: 9rem;
    height: 7rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -4.5rem;
    margin-top: -4rem;
    z-index: 10;
    background-color: #bc8fbf;
  }

  .top {
    width: 9rem;
    height: 1rem;
    background-color: #eb572e;
    font-size: 0.5rem;
    text-align: center;
    line-height: 1rem;
    color: white;
  }

  .getItemPlace {
    width: 9rem;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.5rem;
  }

  .check {
    width: 4rem;
    height: 1.5rem;
    position: absolute;
    left: 50%;
    margin-left: -2rem;
    bottom: 0.5rem;
    background-color: #B1EBB3;
    color: white;
    text-align: center;
    line-height: 1.5rem;
  }
</style>
