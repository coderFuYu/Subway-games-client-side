<template>
  <div class="friendRank">
    <rankItem v-for="(item,index) in rankData" :name="item.userName" :level="item.userLevel" :img="item.userPicture"
              :ranking="index+1"/>
    <p class="youRank">您的好友排名为第{{youRank}}名</p>
  </div>
</template>

<script>
  import rankItem from "./rankItem";

  export default {
    props: {
      rankData: Array,
      youRank: Number
    },
    name: "friendRank",
    components: {
      rankItem
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
