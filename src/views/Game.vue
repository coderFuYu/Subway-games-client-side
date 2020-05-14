<template>
  <ViewSpace :title="'游戏'" @back-click="back()">
    <div class="game" slot="content">
      <GameItem :title="'开心消消乐'" :path="'/game1'"><div class="game1" slot="background"></div></GameItem>

    </div>
  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import GameItem from "../components/content/game/GameItem";

  export default {
    name: "Game",
    components: {
      ViewSpace,
      GameItem
    },
    methods: {
      back() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .game{
    margin-top: 2rem;
  }
  .game1{
    background-image: url(../assets/img/game/game1/game1index.jpg);
    background-size: cover;
  }
</style>
