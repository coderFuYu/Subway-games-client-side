<template>
  <div id="viceTabBar">
    <tab-bar-item path="/notice" class="vice">
      <img slot="item-icon" src="~assets/img/tabbar/notice.png" alt="" v-if="$store.state.notice==='1'">
      <img slot="item-icon" src="~assets/img/tabbar/notice_active.png" alt="" v-else>
      <div slot="item-text">公告</div>
    </tab-bar-item>
    <tab-bar-item path="/mailbox" class="vice">
      <img slot="item-icon" src="~assets/img/tabbar/mailbox.png" alt="" v-if="$store.state.mailbox==='1'">
      <img slot="item-icon" src="~assets/img/tabbar/mailbox_active.png" alt="" v-else>
      <div slot="item-text">邮箱</div>
    </tab-bar-item>

    <tab-bar-item path="/game" class="vice">
      <img slot="item-icon" src="~assets/img/tabbar/game.png" alt="">
      <div slot="item-text">游戏</div>
    </tab-bar-item>
    <tab-bar-item path="/rank" class="vice">
      <img slot="item-icon" src="~assets/img/tabbar/rank.png" alt="">
      <div slot="item-text">排名</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "ViceTabBar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  #viceTabBar {
    width: 1rem;
    height: 7rem;
    position: absolute;
    top: 4rem;
    right: 0.5rem;
  }

  .vice {
    margin-bottom: 0.7rem;
  }
</style>
