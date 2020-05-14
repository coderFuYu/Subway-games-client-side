<template>
  <div class="mailItem" @click="itemClick()">
    <div class="redPointPlace">
      <img src="~assets/img/template/redpoint.png" v-if="hasReaded==='1'"/>
    </div>
    <div>
      <p>{{summary}}</p>
    </div>
    <MailDetail v-show="isshow" :detail="detail" :summary="summary" @close="isshow=false" :toolId="propId"
                :toolNum="propAmount"/>
    <MailReceive v-if="receive" :toolId="propId" :toolNum="propAmount" @exit="receive=false"/>
  </div>
</template>

<script>
  import MailDetail from "./MailDetail";
  import {readMail} from "../../../network/mailbox";
  import MailReceive from "./MailReceive";

  export default {
    name: "MailItem",
    data() {
      return {
        isshow: false,
        receive: false,
      }
    },
    methods: {
      itemClick() {
        this.isshow = true;
        if (this.hasReaded === '1') {
          if (this.propAmount != null) {
            this.receive = true
          }
          readMail(this.id).then(
              res => {
                console.log(res);
                this.$emit('refresh');
                this.$store.commit('refresh');
              }
          )
        }
      },
    },
    components: {
      MailDetail,
      MailReceive
    },
    props: {
      summary: String,
      detail: String,
      hasReaded: String,
      id: String,
      propAmount: Number,
      propId: String
    }
  }
</script>

<style scoped>
  .mailItem {
    width: 9rem;
    height: 2rem;
    line-height: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid #666666;
    font-size: 0.5rem;
  }

  div {
    display: inline-block;
  }

  p {
    float: left;
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
