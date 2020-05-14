<template>
  <div class="get_item">
    <div class="imgSpace">
      <img src="~assets/img/template/exp.png" alt="" v-if="type==='exp'">
      <img src="~assets/img/template/double.png" alt="" v-else-if="type==='double'">
      <img src="~assets/img/template/rocket.png" alt="" v-else-if="type==='rocket'">
      <img src="~assets/img/template/workpiece.png" alt="" v-else-if="type==='workpiece'">
      <img src="~assets/img/template/protective2.png" alt="" v-else-if="type==='protective'">
    </div>
    <p>*{{number}}</p>
  </div>
</template>

<script>
  export default {
    name: "GetItem",
    props: {
      number: Number,
      type: String
    }
  }
</script>

<style scoped>
  .get_item {
    width: 2rem;
    height: 3rem;
    text-align: center;
    background-color: #fff;
    display: inline-block;
  }

  .imgSpace {
    width: 2rem;
    height: 2rem;
  }

  .imgSpace img {
    width: 2rem;
    height: 2rem;
  }
  p{
    font-size: 0.5rem;
    line-height: 1rem;
    color: black;
  }
</style>
