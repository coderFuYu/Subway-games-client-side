<template>
  <tab-bar>
    <tab-bar-item path="/friend">
      <img slot="item-icon" src="~assets/img/tabbar/friend.png" alt="" v-if="$store.state.newFriend==='1'">
      <img slot="item-icon" src="~assets/img/tabbar/friend_active.png" alt="" v-else>
      <div slot="item-text">好友</div>
    </tab-bar-item>
    <tab-bar-item path="/task">
      <img slot="item-icon" src="~assets/img/tabbar/task.png" alt="" v-if="$store.state.taskReward==='1'">
      <img slot="item-icon" src="~assets/img/tabbar/task_active.png" alt="" v-else>
      <div slot="item-text">任务</div>
    </tab-bar-item>

    <tab-bar-item path="/bag">
      <img slot="item-icon" src="~assets/img/tabbar/bag.png" alt="">
      <div slot="item-text">背包</div>
    </tab-bar-item>

    <tab-bar-item path="/mall" class="mall">
      <img slot="item-icon" src="~assets/img/tabbar/mall.png" alt="">
      <div slot="item-text">商城</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar';
  import TabBarItem from 'components/common/tabbar/TabBarItem';

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .mall {
    width: 2rem;
    height: 2rem;
    font-size: 20px;
  }

  .mall img {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
