<template>
  <div>
    <MailItem v-for="(item,index) in mailData" :detail="item.mailMessage" :summary="item.title"
              :hasReaded="item.isReaded" :propAmount="item.propAmount" :propId="item.propId" :id="item.id"
              @refresh="$emit('refresh')" :key="item.id"/>
    <div class="mailListBottom">
      <div class="deleteAlready" @click="deleteMail()">删除已读</div>
    </div>
  </div>
</template>

<script>
  import MailItem from "./MailItem";
  import {deleteAlready} from "network/mailbox"
  export default {
    name: "MailList",
    props: {mailData: Array},
    components: {MailItem},
    methods:{
      deleteMail(){
        deleteAlready().then(
            res=>{
              this.$emit("refresh")
            }
        )
      }
    }
  }
</script>

<style scoped>
.mailListBottom{
  width: 9rem;
  height: 2rem;
  position: absolute;
  bottom: 0;
  background-color: rgba(100, 100, 100, 0.5);
}
.deleteAlready{
  width: 3rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: #0EBF8D;
  float: right;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
</style>
