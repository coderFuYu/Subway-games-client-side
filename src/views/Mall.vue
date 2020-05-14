<template>
  <ViewSpace :title="'商城'" @back-click="back()">
    <div slot="content" class="mall">
      <MallItem v-for="(item,index) in mallData" :name="item.propName" :id="item.propId" :price="item.propValue"
                :detail="item.message" @buy="buy" :src="item.propPicture"
                :class="{left:index%2===0,right:index%2===1}" :key="item.propName"></MallItem>
      <UseResult v-if="useShow" :result="useResult" :title="'购买结果'" @exit="useShow=false"/>
    </div>
  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import MallItem from "../components/content/mall/MallItem";
  import UseResult from "../components/common/result/UseResult";
  import {getMallData} from "../network/mall";

  export default {
    name: "Mall",
    components: {
      ViewSpace,
      MallItem,
      UseResult
    },
    data() {
      return {
        useResult: String,
        useShow: false,
        mallData: []
      }
    },
    created() {
      this.getMallDataMethod();
    },
    methods: {
      back() {
        this.$router.push('/');
      },

      buy(message) {
        this.useShow = true;
        this.useResult = message;
      },
      getMallDataMethod() {
        getMallData().then(res => {
          this.mallData = res.body;
        })
      }
    }
  }
</script>

<style scoped>
  .mall {
    margin-top: 2rem;
  }

  .left {
    float: left;
    margin-left: 0.1rem;
  }

  .right {
    float: right;
    margin-right: 0.1rem;
  }
</style>
