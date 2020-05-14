<template>
  <ViewSpace :title="'好友'" @back-click="back()" @open="addFriendShow=true">
    <img src="../assets/img/template/addFriendActive.png" slot="add" v-if="$store.state.newFriend==='0'"
         @click="addFriendShow=true"/>
    <img src="../assets/img/template/addFriend.png" slot="add" v-else @click="addFriendShow=true"/>
    <div slot="content">
      <FriendList class="FriendItem" slot="content" :friend-data="friendData" @refresh="getFriendDataMethod()"/>
      <AddFriend :friend-request-data="addFriendData" v-if="addFriendShow" @exit="addFriendShow=false"
                 @refresh="getFriendRequestMethod"/>
    </div>

  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import FriendList from "../components/content/friend/FriendList";
  import {getFriendData, getFriendRequest} from "network/friend";
  import AddFriend from "../components/content/friend/AddFriend";

  export default {
    name: "Friend",
    data() {
      return {
        friendData: [],
        addFriendShow: false,
        addFriendData: []
      }
    },
    components: {
      ViewSpace,
      FriendList,
      AddFriend,
    },
    created() {
      this.getFriendDataMethod();
      this.getFriendRequestMethod();
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      getFriendDataMethod() {
        getFriendData(1).then(res => {
          this.friendData = res.body;
        })
      },
      getFriendRequestMethod() {
        getFriendRequest().then(
            res => {
              this.addFriendData = res.body;
            }
        )
      }
    }
  }
</script>

<style scoped>
  .FriendItem {
    margin-top: 2rem;
  }
</style>
