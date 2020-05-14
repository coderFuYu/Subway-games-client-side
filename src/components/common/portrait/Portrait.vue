<template>
  <div id="portrait">

    <div class="portrait_space"><img :src="$store.state.portrait_src" alt=""></div>
    <div id="exp">
      <p>{{$store.state.username}}</p>
      <p>Lv:{{$store.state.level}} </p>
      <p>Exp:{{$store.state.already}}/{{$store.state.level*10}}</p>
      <div id="progress_bar">
        <div class="already" :style="{'width':exp_Percentage+'rem'}"></div>
      </div>
    </div>
    <div class="workpiece"><img src="~assets/img/template/workpiece.png"/>
      <p>:&nbsp{{$store.state.workpiece}}</p></div>
  </div>
</template>

<script>
  export default {
    name: "Portrait",
    computed: {
      exp_Percentage() {
        return (this.$store.state.already / (this.$store.state.level * 10)) * 4
      }
    }
  }
</script>

<style scoped>

  #portrait {
    width: 6rem;
    height: 3.5rem;
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    color: #000;

  }

  .portrait_space {
    width: 1.5rem;
    height: 1.5rem;
    float: left;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    border-radius: 0.75rem;
    overflow: hidden;
  }

  .portrait_space img {
    width: 1.5rem;
    height: 1.5rem;
  }

  #exp {
    width: 4rem;
    height: 2rem;
    float: right;
    position: relative;
    text-align: left;
  }

  #exp p {
    font-size: 0.4rem;
  }

  #progress_bar {
    width: 4rem;
    height: 3px;
    background-color: #808080;
    position: absolute;
    left: 0;
    bottom: 0.5rem;
  }

  #progress_bar .already {
    height: 3px;
    background-color: #B1EBB3;
  }

  .workpiece {
    width: 6rem;
    height: 1rem;
    margin-top: 0.2rem;
    float: left;
  }

  .workpiece img {
    height: 1rem;
    width: 1rem;
    margin-left: 0.3rem;
    float: left;
  }

  .workpiece p {
    display: inline-block;
    font-size: 0.6rem;
    line-height: 1rem;
    margin-left: 0.2rem;
    float: left;
  }
</style>
