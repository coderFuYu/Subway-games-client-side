<template>
<!--  游戏初始界面-->
  <div class="gameRule" v-if="!gameStatus">
    <div class="back" @click.prevent="$router.push('/game')"></div>
    <div class="start" @click="start()">开始</div>
    <div class="rule" @click="rule=true">游戏规则</div>
    <div class="rank" @click="rank=true">游戏排名</div>
<!--    游戏规则-->
    <ViewSpace class="rulePlace" v-if="rule" :title="'游戏规则'" @back-click="rule=false">
      <p slot="content">游戏中有9*14的网格，每个网格中有一个动物头像，动物头像共五种，点击周围有相同的动物头像的网格会对所有相邻且动物头像相同的网格进行消除，根据单次消除个数增加积分。
        2个加2分，3个加4分，4个加8分，5-9个加16分，10个及以上加100分。游戏时间共60秒，排名按积分排序。
      </p>
    </ViewSpace>
<!--    游戏排名-->
    <ViewSpace class="rankPlace" v-if="rank" :title="'游戏排名'" @back-click="rank=false">
      <div slot="content" class="content">
        <div class="choose">
          <div class="choice" :class="{Selected:rankWay===1}" @click="rankWay=1">全区排名</div>
          <div class="choice" :class="{Selected:rankWay===2}" @click="rankWay=2">好友排名</div>
        </div>
        <RankList :rank-data="worldRankData" :you-rank="youWorldRank" v-if="rankWay===1"/>
        <RankList v-else :rank-data="friendRankData" :you-rank="youFriendRank"/>
      </div>
    </ViewSpace>
  </div>
<!--  游戏界面-->
  <div class="gamePlace" v-else>
    <div class="back" @click.prevent="exit()"></div>
    <div id="gameSection" class="gameSection">
      <div class="column" v-for="(columnItem,columnIndex) in stars" :style="{'left':columnIndex+'rem'}">
        <div class="item" v-for="(item,index) in columnItem" :class="className(item)" :key="item.id"
             :style="{'bottom':index+'rem'}" @touchstart="clearRegister(columnIndex,index)">
        </div>
      </div>
    </div>
    <div class="infoBox">
      <p class="timeInfo">倒计时: <span class="time">{{countDown}}</span></p>
      <p class="curScoreInfo">得分: <span class="curScore">{{curScore}}</span></p>
    </div>
  </div>

</template>

<script>
  import ViewSpace from "../components/content/viewSpace/ViewSpace";
  import {sendGameScore, getWorldRank, getFriendRank} from "network/game";
  import RankList from "../components/content/game/RankList";

  export default {
    name: "Game1",
    components: {
      ViewSpace,
      RankList,
    },
    created() {
      this.getRankData();
    },
    data() {
      return {
        rankWay: 1,//排名方式，1为全区排名，2位好友排名
        youWorldRank:String,
        youFriendRank:String,
        worldRankData:[],
        friendRankData:[],
        rule: false,//是否显示规则
        rank: false,//是否显示排名
        curScore: 0, // 当前分数
        countDown: 60, // 倒计时
        stars: [], // 布局矩阵 14*9
        choose: [], // 选中元素
        gameStatus: false, // 游戏状态
        uid: 0,
        timeFlag: null//定时器变量
      }
    },
    methods: {
      getRankData(){//获取所有排名信息
        getWorldRank(1).then(res => {
          this.worldRankData=res.body.rankVoList;
          this.youWorldRank=res.body.userRank;
        });
        getFriendRank(1).then(res => {
          this.friendRankData=res.body.rankVoList;
          this.youFriendRank=res.body.userRank;
        });
      },
      init() {//游戏初始化
        this.curScore = 0
        this.countDown = 30
        this.stars = []
        this.uid = 0
        for (let i = 0; i < 9; i++) {
          this.stars[i] = [];
          for (let j = 0; j < 14; j++) {
            let type = parseInt(Math.random() * 6)
            let item = {
              x: i,
              y: j,
              Type: type,
              itemAni: false,
              id: this.uid,
            }
            this.uid++;
            this.stars[i].push(item);
          }
        }
      },
      check(tag) {//检查周围相同元素
        if (tag == null) return;
        if (this.choose.indexOf(tag) === -1) {
          this.choose.push(tag);
        }
        if (tag.y + 1 <= 13 && this.stars[tag.x][tag.y + 1].Type === tag.Type && this.choose.indexOf(this.stars[tag.x][tag.y + 1]) === -1) {
          this.check(this.stars[tag.x][tag.y + 1]);
        }
        if (tag.y - 1 >= 0 && this.stars[tag.x][tag.y - 1].Type === tag.Type && this.choose.indexOf(this.stars[tag.x][tag.y - 1]) === -1) {
          this.check(this.stars[tag.x][tag.y - 1]);
        }
        if (tag.x + 1 <= 8 && this.stars[tag.x + 1][tag.y].Type === tag.Type && this.choose.indexOf(this.stars[tag.x + 1][tag.y]) === -1) {
          this.check(this.stars[tag.x + 1][tag.y]);
        }
        if (tag.x - 1 >= 0 && this.stars[tag.x - 1][tag.y].Type === tag.Type && this.choose.indexOf(this.stars[tag.x - 1][tag.y]) === -1) {
          this.check(this.stars[tag.x - 1][tag.y]);
        }
      },
      refresh() {//消除元素，创建新元素
        for (let i = 8; i >= 0; i--) {
          if (this.stars[i].length < 14) {
            let addLength = 14 + (14 - this.stars[i].length);
            for (let j = 14; j < addLength; j++) {
              let type = parseInt(Math.random() * 6)
              let item = {
                x: i,
                y: j,
                Type: type,
                itemAni: false,
                id: this.uid,
              }
              this.uid++;
              this.stars[i].push(item);
              this.stars[i] = this.stars[i].filter(function (e) {
                return e
              });
            }
          }
        }
        for (let i = 0; i < this.stars.length; i++) {
          for (let j = 0; j < this.stars[i].length; j++) {
            setTimeout(() => {
              this.stars[i][j].x = i;
              this.stars[i][j].y = j;
            }, 100)
          }
        }
      },
      sort() {//排序
        if (this.choose.length > 1) {
          let chooseArr = [];
          for (let i = this.stars.length - 1; i >= 0; i--) {
            for (let j = this.stars[i].length - 1; j >= 0; j--) {
              if (this.choose.indexOf(this.stars[i][j]) !== -1) {
                chooseArr.push(this.stars[i][j]);
              }
            }
          }
          this.choose = chooseArr;
        }
      },
      getScore() {//加分
        if (this.choose.length <= 1) return;
        if (this.choose.length === 2) {
          this.curScore += 2
        }
        if (this.choose.length === 3) {
          this.curScore += 4
        }
        if (this.choose.length === 4) {
          this.curScore += 8
        }
        if (this.choose.length >= 5) {
          this.curScore += 16
        }
        if (this.choose.length >= 10) {
          this.curScore += 100
        }
      },
      clearRegister(x, y) {//点击事件
        if (!this.gameStatus) return
        if (this.flag) return
        this.flag = true
        this.check(this.stars[x][y]);
        this.sort();
        if (this.choose.length > 1) {
          this.getScore();
          for (let i = 0; i < this.choose.length; i++) {
            this.stars[this.choose[i].x].splice(this.choose[i].y, 1);
          }
          this.refresh();
        }
        this.choose = []
        this.flag = false
      },

      start() {//开始
        if (this.gameStatus) return;
        this.gameStatus = true
        this.startAni = false
        this.init();
        this.timeFlag = setInterval(() => {
          this.countDown--
          if (this.countDown <= 0) {
            clearInterval(this.timeFlag)
            alert('恭喜获得' + this.curScore + '分')
            sendGameScore(1,this.curScore).then(res=>{
            });
            setTimeout(()=>{
              this.getRankData();
            },500)
            this.gameStatus = false
            this.startAni = true
          }
        }, 1000);
      },
      className(item) {
        return {
          itemT0: item.Type === 0,
          itemT1: item.Type === 1,
          itemT2: item.Type === 2,
          itemT3: item.Type === 3,
          itemT4: item.Type === 4,
          itemT5: item.Type === 5,
          itemAni: item.itemAni
        }
      },
      exit() {//中途退出
        clearInterval(this.timeFlag);
        this.gameStatus = false;
      }
    },
  }
</script>

<style scoped>

  .gameRule {
    width: 100%;
    height: 100%;
    position: fixed;
    background-image: url(../assets/img/game/game1/game1index.jpg);
    background-size: cover;
    overflow: hidden;
    z-index: 6;
    font-size: 0.6rem;
  }

  .gameRule .start {
    width: 4rem;
    height: 2rem;
    position: absolute;
    background-color: orange;
    line-height: 2rem;
    text-align: center;
    color: white;
    left: 50%;
    margin-left: -2rem;
    top: 5rem;
  }

  .gameRule .rule {
    width: 3rem;
    height: 1.5rem;
    position: absolute;
    background-color: grey;
    line-height: 1.5rem;
    text-align: center;
    color: white;
    left: 50%;
    margin-left: -1.5rem;
    top: 8rem;
  }

  .gameRule .rulePlace p {
    margin-top: 2.5rem;
    display: inline-block;
    width: 7rem;
    margin-left: 1rem;
    text-indent: 2em;
    font-size: 0.55rem;
  }

  .gameRule .rank {
    width: 3rem;
    height: 1.5rem;
    position: absolute;
    background-color: grey;
    line-height: 1.5rem;
    text-align: center;
    color: white;
    left: 50%;
    margin-left: -1.5rem;
    top: 10rem;
  }

  .content{
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
  .gamePlace {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    overflow: hidden;
    z-index: 6;
  }

  .back {
    float: right;
    margin-right: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.25rem;
    background-image: url("../assets/img/template/back.png");
    background-size: cover;
  }

  #gameSection {
    width: 9rem;
    height: 14rem;
    left: 50%;
    margin-left: -4.5rem;
    margin-top: 1rem;
    position: absolute;
    box-shadow: 1px 1px 5px #ccc;
    overflow: hidden;
  }

  .column {
    position: absolute;
    width: 1rem;
    height: 14rem;
  }

  .item {
    position: absolute;
    width: 1rem;
    height: 1rem;
    transform: scale(0.95);
    border: 1px solid #9E9E9E;
    border-radius: 0.1rem;
    cursor: pointer;
    background-size: 10rem 1rem;
    background-position: 0 0;
    text-align: center;
    line-height: 1rem;
    font-weight: 700;
  }

  .itemT0 {
    background-image: url(../assets/img/game/game1/tile_0.png);
  }

  .itemT1 {
    background-image: url(../assets/img/game/game1/tile_1.png);
  }

  .itemT2 {
    background-image: url(../assets/img/game/game1/tile_2.png);
  }

  .itemT3 {
    background-image: url(../assets/img/game/game1/tile_3.png);
  }

  .itemT4 {
    background-image: url(../assets/img/game/game1/tile_4.png);
  }

  .itemT5 {
    background-image: url(../assets/img/game/game1/tile_5.png);
  }

  .itemAni {
    animation: itemAni 0.8s steps(9, end) infinite;
  }

  @keyframes itemAni {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: -100%;
    }
  }

  .infoBox {

    position: absolute;
    width: 90%;
    top: 16rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
  }

  .timeInfo,
  .curScoreInfo,
  .start {
    width: 33.3%;
    height: 0.5rem;
    font-size: 0.5rem;
    color: brown;
    text-align: left;
    margin-left: 0.5rem;
  }

  .start {
    line-height: 0.7rem;
    font-size: 0.5rem;
    color: #fff;
    background-color: brown;
    text-align: center;
    font-weight: 700;
    text-shadow: 1px 1px 5px #555;
    box-shadow: 1px 1px 5px #555;
    cursor: pointer;
    transition: all 0.3s ease;
    height: 0.7rem;
  }

  .startAni {
    animation: startAni 0.6s ease infinite;
  }

  @keyframes startAni {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
