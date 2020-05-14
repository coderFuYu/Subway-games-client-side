<template>
  <div class="noticeItem" @click="itemClick()">
    <div class="redPointPlace">
      <img src="~assets/img/template/redpoint.png" v-if="hasReaded==='1'"/>
    </div>
    <div>
      <p>{{summary}}</p>
    </div>
    <Detail v-show="show" :detail="detail" :summary="summary" @btn-click="show=false"/>
  </div>
</template>

<script>
  import Detail from "./Detail";
  import {readNotice} from "network/notice";
  import {getHomeData} from "network/home"

  export default {
    name: "NoticeItem",
    data() {
      return {
        show: false,
      }
    },
    components: {
      Detail
    }, methods: {
      itemClick() {
        this.show = true;
        if (this.hasReaded === '1') {
          readNotice(this.id).then(res => {
                this.$emit('refresh');
                this.$store.commit('refresh');
              }
          )
        }
      }
    },
    props: {
      summary: {type: String},
      detail: {type: String},
      hasReaded: {type: String},
      id: {type: String}
    }
  }
</script>

<style scoped>
  div {
    display: inline-block;
  }

  p {
    float: left;
  }

  .noticeItem {
    width: 9rem;
    height: 2rem;
    /*padding-left: 1rem;*/
    line-height: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid #666666;
    font-size: 0.5rem;
  }

  .redPointPlace {
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.75rem;
    float: left;
  }

  .redPointPlace img {
    width: 0.5rem;
    height: 0.5rem;
    float: left;
  }
</style>
