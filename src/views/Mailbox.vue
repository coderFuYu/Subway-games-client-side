<template>
  <ViewSpace :title="'邮箱'" @back-click="back()">
    <MailList slot="content" class="mailbox" :mailData="mailData" @refresh="getMailListMethods()"/>
  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import MailList from "components/content/mailbox/MailList";
  import {getMailList, readMail} from "network/mailbox";

  export default {
    name: "Mailbox",
    data(){
      return{
        mailData:[]
      }
    },
    components: {
      ViewSpace,
      MailList
    },
    created() {
      this.getMailListMethods();
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      getMailListMethods() {
        getMailList(1).then(
            res => {
              console.log(res);
              this.mailData=res.body
            }
        )
      }
    }
  }
</script>

<style scoped>
  .mailbox {
    margin-top: 2rem;
  }
</style>
