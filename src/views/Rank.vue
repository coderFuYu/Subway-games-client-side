<template>
  <ViewSpace :title="'排名'" @back-click="back()">
    <div slot="content" class="rank">
<!--      <div class="choose">-->
<!--        <div class="choice" :class="{Selected:rankWay===1}" @click="rankWay=1">全区排名</div>-->
<!--        <div class="choice" :class="{Selected:rankWay===2}" @click="rankWay=2">好友排名</div>-->
<!--      </div>-->
      <totalRank  :rank-data="worldRankData" :you-rank="youRank"/>
<!--      <friendRank v-else :rank-data="friendRankData" :you-rank="1"/>-->
    </div>

  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import totalRank from "../components/content/rank/totalRank";
  // import friendRank from "../components/content/rank/friendRank";
  import {getWorldRankData} from "network/rank"
  import {getFriendData} from "network/friend"

  export default {
    name: "Rank",
    data() {
      return {
        // rankWay: 1,
        worldRankData:[],
        youRank:String
        // friendRankData:[]
      }
    },
    components: {
      ViewSpace,
      totalRank,
      // friendRank
    },created() {
      this.getWorldRankDataMethod()
      // this.getFriendRankDataMethod()
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      getWorldRankDataMethod() {
        getWorldRankData('1').then(res => {

          this.worldRankData=res.body.rankList;
          this.youRank=res.body.userRank;
        })
      },
      // getFriendRankDataMethod() {
      //   getFriendData('1').then(res => {
      //     console.log(res);
      //     this.friendRankData=res.body;
      //   })
      // },
    }
  }
</script>

<style scoped>
  .rank {
    margin-top: 2rem;
  }

  .choose {
    width: 9rem;
    height: 1rem;
  }

  .choice {
    width: 4.5rem;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
    float: left;
    background-color: #ff7936;
  }

  .Selected {
    background-color: #fff;
  }
</style>
