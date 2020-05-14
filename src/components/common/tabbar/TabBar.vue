<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*background-color: #f6f6f6;*/
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1rem;
    /*box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);*/
  }
</style>
