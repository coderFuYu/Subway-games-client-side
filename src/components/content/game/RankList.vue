<template>
  <div class="totalRank">
    <RankItem v-for="(item,index) in rankData" :name="item.userName" :score="item.playerScore"
              :ranking="index+1" :key="item.name"/>
    <p class="youRank">您的全区排名为第{{youRank}}名</p>
  </div>
</template>

<script>
  import RankItem from "./RankItem";

  export default {
    name: "RankList",
    props: {
      rankData: Array,
      youRank: 0
    },
    components: {
      RankItem
    }
  }
</script>

<style scoped>
  .youRank {
    width: 9rem;
    height: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    padding-left: 0.5rem;
    line-height: 1rem;
    font-size: 0.5rem;
  }
</style>
