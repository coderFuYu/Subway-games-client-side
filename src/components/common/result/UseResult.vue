<template>
  <div class="receive">
    <div class="top">{{title}}</div>
    <p>{{result}}</p>
    <div class="check" @click.stop="$emit('exit')">确定</div>
  </div>
</template>

<script>
  export default {
    name: "UseResult",
    props:{
      result:String,
      title:String
    }
  }
</script>

<style scoped>
  .receive {
    width: 9rem;
    height: 5rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -4.5rem;
    margin-top: -4rem;
    z-index: 10;
    background-color: #55a985;
  }

  .top {
    width: 9rem;
    height: 1rem;
    background-color: #55c780;
    font-size: 0.5rem;
    text-align: center;
    line-height: 1rem;
    color: white;
  }
p{
  display: inline-block;
  width: 9rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: #fff;
  font-size: 0.7rem;
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
    font-size: 0.6rem;
  }

</style>
