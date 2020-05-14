<template>
  <ViewSpace :title="'公告'" @back-click="back()">
    <NoticeList slot="content" class="notice" :noticeData="noticeData" @refresh="getNoticeListMethods()"/>
  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import NoticeList from "../components/content/notice/NoticeList";
  import {getNoticeList} from "network/notice";

  export default {
    name: "Notice",
    components: {
      ViewSpace,
      NoticeList
    }, data() {
      return {
        noticeData: []
      }
    },
    created() {
      this.getNoticeListMethods();
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      getNoticeListMethods() {
        getNoticeList(1).then(
            res => {
              this.noticeData = res.body;
            }
        )
      },
    }
  }
</script>

<style scoped>
  .notice {
    margin-top: 2rem;
  }
</style>
