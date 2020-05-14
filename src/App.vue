<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view id="router"></router-view>
    </transition>
    <p class="restTime" v-if="$store.state.restTime!==0">
      {{(hour)}}:{{minute}}:{{second}}</p>
    <MainTabBar/>
    <ViceTabBar/>
    <Portrait/>
    <div class="productionPlace">
      <div class="production" v-if="$store.state.restTime!==0" @touchstart.prevent=""></div>
      <div class="productDone" v-else @touchstart.prevent=""></div>
    </div>
    <img class="transition" src="~assets/img/template/workpiece.png"/>
    <div class="harvest" v-if="$store.state.restTime===0" @click="harvest()"><img src="~assets/img/template/hand.png"/>
    </div>

  </div>
</template>

<style>
  @import "assets/css/base.css";

  #app {
    background-image: url(assets/img/template/background.png);
    background-size: cover;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-on-enter-active,
  .slide-on-leave-active,
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all 300ms;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-right-leave-to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-left-leave-to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-on-enter {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  .slide-on-leave-to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  .slide-down-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  .slide-down-leave-to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
.productionPlace{
  width:6.6rem;
  height: 3.93rem;
  position: fixed;
  left: 50%;
  margin-left: -3.3rem;
  top: 8rem;
}
.productionPlace div{
  width:6.6rem;
  height: 3.93rem;
  background-size: cover;
}
  .production{
    background-image: url("assets/img/template/production.gif");
  }
  .productDone{
    background-image: url("assets/img/template/production done.png");
  }
  .transition {
    position: fixed;
    top: 8rem;
    right: 3rem;
    width: 2rem;
    height: 2rem;
    opacity: 1;
    display: none;
  }

  .harvest {
    position: fixed;
    top: 7rem;
    right: 3rem;
    width: 1rem;
    height: 1rem;
  }

  .harvest img {
    width: 1rem;
    height: 1rem;
  }

  .restTime {
    text-align: center;
    display: inline-block;
    position: fixed;
    width:3rem;
    height: 1rem;
    font-size: 0.5rem;
    line-height: 1rem;
    top: 6.5rem;
    left: 50%;
    margin-left: -1.5rem;
  }
</style>
<script>
  import MainTabBar from "./components/content/tabbar/MainTabBar";
  import ViceTabBar from "./components/content/tabbar/ViceTabBar";
  import Portrait from "./components/common/portrait/Portrait";
  import {harvestWorkpiece} from "network/home";


  export default {
    name: 'App',
    data() {
      return {
        transitionName: '',
        harvestTransition: ''
      }
    },
    components: {
      MainTabBar,
      ViceTabBar,
      Portrait
    },
    created() {
      this.$store.commit('refresh');
    },
    methods: {
      harvest() {
        let ele = document.getElementsByClassName('transition')[0];
        let time;
        harvestWorkpiece().then(
            res => {
              let top = 8, right = 3, opacity = 1;
              ele.style.display = 'block';
              time = window.setInterval(() => {
                right += 0.1;
                top -= 0.1;
                opacity -= 0.02;
                ele.style.right = right + 'rem';
                ele.style.top = top + 'rem';
                ele.style.opacity = opacity;
                if (right >= 8) window.clearInterval(time);
              }, 16)
              setTimeout(() => {
                ele.style.opacity = 1;
                ele.style.display = 'none';
                ele.style.right = 3 + 'rem';
                ele.style.top = 8 + 'rem';
                this.$store.commit('refresh');
              }, 1000)

            }
        )
      },
    },
    computed: {
      second() {
        if (this.$store.state.second < 10) {
          return '0' + this.$store.state.second
        } else return String(this.$store.state.second)
      },
      minute() {
        if (this.$store.state.minute < 10) {
          return '0' + this.$store.state.minute
        } else return String(this.$store.state.minute)
      },
      hour() {
        return String(this.$store.state.hour)
      },
    },
    watch: {
      $route(to, from) {
        let check = to.meta - from.meta;
        if (check > 0) {
          if (check < 5) {
            this.transitionName = "slide-down";

          } else {
            this.transitionName = "slide-left";
          }
        } else {
          if (check > -5) {
            this.transitionName = "slide-on";
          } else {
            this.transitionName = "slide-right";
          }
        }
      }
    }
  }
</script>
