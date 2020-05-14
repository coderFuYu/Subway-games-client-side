<template>
  <div class="rankItem">
    <div class="ranking_place">
      <img src="../../../assets/img/template/first.png" v-if="ranking===1"/>
      <img src="../../../assets/img/template/second.png" v-else-if="ranking===2"/>
      <img src="../../../assets/img/template/third.png" v-else-if="ranking===3"/>
      <p v-else>{{ranking}}</p>
    </div>
    <p class="name">{{name}}</p>
    <p class="score">{{score}}分</p>
  </div>
</template>

<script>
  export default {
    name: "RankItem",
    props: {
      ranking: {type: Number},
      name:{type:String},
      score:{type: Number}
    }
  }
</script>

<style scoped>
  p{
    display: inline-block;
  }
  .rankItem{
    width: 9rem;
    height: 3rem;
    background-color:  rgba(255,255,255,0.3);
    border-bottom: 1px solid #666666;
  }
  .ranking_place{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.75rem;
    float: left;
    text-align: center;
    display: inline-block;
  }
  .ranking_place img{
    width: 1.51rem;
    height: 1.5rem;

  }
  .ranking_place p{
    line-height: 1.5rem;
    font-size: 0.7rem;
  }

  .name,.score{
    line-height: 3rem;
    font-size: 0.5rem;
  }
  .name{
    float: left;
    margin-left: 0.5rem;
  }
  .score{
    float: right;
    margin-right: 0.5rem;
  }
</style>
