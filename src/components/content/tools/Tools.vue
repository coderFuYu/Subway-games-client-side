<template>
  <div class="tool">
    <img :src="src" alt="">
    <p class="name">{{name}}</p>
    <p class="have">*{{number}}</p>
    <div class="detail" v-show="show_detail">{{detail}}</div>
    <div class="detail_img" @touchstart.prevent="show_detail=1"  @touchend.prevent="show_detail=0"></div>
    <p class="use" @click="use()">使用</p>
  </div>
</template>

<script>
  import {useTool} from "network/bag"

  export default {
    name: "Tools",
    data() {
      return {
        show_detail: 0
      }
    },
    props: {
      name: String,
      src_path: String,
      number: Number,
      detail: String,
      id: String,
      src:String,
    },
    methods: {
      use() {
        if (this.number > 0) {
          useTool(this.id).then(res => {
            if(res.result==='success'){
              this.$emit("use", "使用成功");
              this.$store.commit('refresh');
            }

            else this.$emit("use", "当前不能使用这个道具");
          }).catch(res => {
                this.$emit("use", "网络错误");
              }
          )
        } else {
          this.$emit("use", "道具个数不足")
        }
      }
    }
  }
</script>

<style scoped>
  .tool {
    box-sizing: border-box;
    position: relative;
    width: 4.45rem;
    height: 5.8rem;
    margin-top: 5px;
    background-color: #27ffad;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
    margin-left: 1.225rem;
  }

  .name, .have {
    margin-top: 0.2rem;
    text-align: center;
    font-size: 0.5rem;
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
    background-image: url("../../../assets/img/template/detail.png");
    background-size: cover;
  }

  .use {
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
