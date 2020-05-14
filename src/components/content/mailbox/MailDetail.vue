<template>
  <div class="detailView">
    <div class="top">
      <p class="itemName">{{summary}}</p>
      <img class="back" src="~assets/img/template/back.png" @click.stop="$emit('close')">
    </div>
    <div class="detail">
      <p>{{detail}}</p>
      <div class="getItemPlace">
        <GetItem class="mailGetItem" :type="toolName" :number="toolNum"/>

      </div>
    </div>
  </div>
</template>

<script>
  import GetItem from "../../common/getItem/GetItem";
  export default {
    name: "MailDetail",
    props:{
      detail:String,
      summary:String,
      toolId:String,
      toolNum:Number
    },
    components:{
      GetItem
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
  .detailView {
    width: 9rem;
    height: 14rem;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #0EBF8D;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-left: -4.5rem;
    margin-top: -8rem;
    border-radius: 0.5rem;
    border: 1px solid #333;
    box-sizing: border-box;
    z-index: 6;
  }

  .top {
    height: 2rem;
    background-color: #B1EBB3;
    position: fixed;
    width: 9rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-align: center;
    color: white;
    font-size: 18px;
  }

  .back {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  .itemName {
    display: inline-block;
    line-height: 2rem;
    font-size: 20px;
  }
  .detail{
    width: 7rem;
    height: 9rem;
    margin-top: 3rem;
    margin-left: 1rem;
    background-color: rgba(255,255,255,0.3);
    color: black;
    font-size: 0.5rem;
    position: relative;
  }
  .detail>p{
    text-indent: 2em;
  }
  .getItemPlace{
    width: 7rem;
    height: 3rem;
    position: absolute;
    bottom: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.5rem;
  }

</style>
