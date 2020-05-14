<template>
  <div class="goods">
    <div class="goodImg">
      <img :src="src">
    </div>
    <p class="name">{{name}}</p>
    <p class="price">{{price}}<img src="../../../assets/img/template/workpiece.png" class="workpiece"/></p>
    <div class="detail" v-show="show_detail">{{detail}}</div>
    <img class="detail_img" src="~assets/img/template/detail.png" alt="" @touchstart="show_detail=1"
         @touchend="show_detail=0">
    <p class="buy" @click="buy()">购买</p>
  </div>
</template>

<script>
import {buyProp} from "network/mall"

  export default {
    name: "MallItem",
    data() {
      return {
        show_detail: 0
      }
    },
    props: {
      name: String,
      src_path: String,
      price: Number,
      detail: String,
      id: String,
      src:String
    },
    methods: {
      buy() {
        buyProp(this.id).then(
            res=>{
              this.$store.commit('refresh');
              if (res.result === 'success') {
                this.$emit('buy', '购买成功')
              } else {
                this.$emit('buy', '购买失败')
              }
            }
        )
      }
    }
  }
</script>

<style scoped>
  .goods {
    box-sizing: border-box;
    position: relative;
    width: 4.3rem;
    height: 5.8rem;
    margin-top: 5px;
    background-color: #27ffad;
  }

  .goodImg img {
    width: 2rem;
    height: 2rem;
    margin-top: 0.5rem;
    margin-left: 1.225rem;
  }

  .name, .price {
    margin-top: 0.2rem;
    text-align: center;
    font-size: 0.5rem;
    line-height: 0.7rem;
  }

  .workpiece {
    width: 0.7rem;
    height: 0.7rem;
    display: inline-block;
  }

  .detail {
    width: 4rem;
    height: 2rem;
    background-color: rgba(5, 5, 5, 0.5);
    position: absolute;
    top: -2rem;
    right: 0;
    color: white;
    font-size: 0.5rem;
    padding: 0.2rem;
  }

  .detail_img {
    width: 0.7rem;
    height: 0.7rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }

  .buy {
    position: absolute;
    bottom: 0.3rem;
    left: 50%;
    width: 1.5rem;
    height: 0.9rem;
    margin-left: -0.75rem;
    background-color: #ff7d3c;
    color: white;
    line-height: 0.9rem;
    font-size: 0.4rem;
    text-align: center;
  }
</style>
