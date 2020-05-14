<template>
  <div class="receive">
    <div class="top">邮箱附件</div>
    <div class="getItemPlace">
      <GetItem :type="toolName" :number="toolNum"/>
    </div>
    <div class="check" @click.stop="$emit('exit')">确定</div>
  </div>
</template>

<script>
  import GetItem from "../../common/getItem/GetItem";

  export default {
    name: "MailReceive",
    components: {
      GetItem
    },
    props: {
      toolId: String,
      toolNum: Number
    },
    computed: {
      toolName() {
        if (this.toolId === '1')
          return 'rocket';
        else if (this.toolId === '2')
          return 'double';
        else if (this.toolId === '3')
          return 'protective';
        else
          return 'workpiece';
      }
    }
  }
</script>

<style scoped>
  .receive {
    width: 8rem;
    height: 7rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -4rem;
    margin-top: -4rem;
    z-index: 10;
    background-color: #55a985;
  }

  .top {
    width: 8rem;
    height: 1rem;
    background-color: #55c780;
    font-size: 0.5rem;
    text-align: center;
    line-height: 1rem;
    color: white;
  }

  .getItemPlace {
    width: 8rem;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.5rem;
  }

  .check {
    width: 4rem;
    height: 1.5rem;
    position: absolute;
    left: 50%;
    margin-left: -2rem;
    bottom: 0.5rem;
    background-color: #B1EBB3;
    color: white;
    text-align: center;
    line-height: 1.5rem;
  }
</style>
