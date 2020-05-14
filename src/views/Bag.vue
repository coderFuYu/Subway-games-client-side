<template>
  <ViewSpace :title="'背包'" @back-click="back()" class="router">
    <div slot="content" class="bag">
      <Tools v-for="(item,index) in bagData" :name="item.propName" :number="item.propAmount" :id="item.propId"
             :detail="item.message" @use="use" @touchstart=" "
             :src="item.propPicture"
             :class="{left:index%2===0,right:index%2===1}" :key="item.message"></Tools>
      <UseResult v-if="useShow" :result="useResult" :title="'使用结果'" @exit="useShow=false"/>
    </div>
  </ViewSpace>
</template>

<script>
  import {getBagData} from "../network/bag";
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import Tools from "../components/content/tools/Tools";
  import UseResult from "../components/common/result/UseResult";

  export default {
    name: "Bag",
    data() {
      return {
        useShow: false,
        useResult: String,
        bagData: []
      }
    },
    components: {
      ViewSpace,
      Tools,
      UseResult
    },
    created() {
      this.getBagDataMethod();
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      use(message) {
        this.useResult = message;
        this.useShow = true;
      },
      getBagDataMethod() {
        getBagData().then(res => {
          this.bagData = res.body;
        })
      }
    }
  }
</script>

<style scoped>
  .bag {
    margin-top: 2rem;
  }

  .router {
    transition: all 0.5s;
  }

  img {
    pointer-events: none;
  }
</style>
