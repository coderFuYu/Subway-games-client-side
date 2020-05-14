<template>
  <div>
    <NoticeItem v-for="(item,index) in noticeData" :detail="item.noteMessage" :summary="item.title"
                :hasReaded="item.hasReaded" :id="item.id" :key="item.title" @refresh="$emit('refresh')"/>
  </div>
</template>

<script>
  import NoticeItem from "./NoticeItem";

  export default {
    name: "NoticeList",
    props: {noticeData: Array},
    components: {NoticeItem},
  }
</script>

<style scoped>

</style>
