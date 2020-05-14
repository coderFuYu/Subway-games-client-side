<template>
  <div>
    <div class="tab-bar-item" @click="itemClick()">
      <div>
        <slot name="item-icon"></slot>
      </div>
      <div>
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 1.5rem;
  }

  .tab-bar-item img {
    width: 1rem;
    height: 1rem;
  }

  p {
    color: pink;
  }
</style>
