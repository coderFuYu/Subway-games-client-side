<template>
  <div class="taskItem">
    <p>{{describe}}</p>
    <div class="button able" v-if="state==='0'" @click="receive(id)">领取</div>
    <div class="button unable" v-else>{{taskTime}}/{{total}}</div>
    <Receive v-if="show" :exp="exp" :workpiece="workpiece" @exit="show=false"/>
  </div>
</template>

<script>
  import Receive from "./Receive";
  import {taskReceive} from "network/task";

  export default {
    name: "TaskItem",
    components: {
      Receive
    },
    data() {
      return {
        show: false,
        exp: 0,
        workpiece: 0
      }
    },
    methods: {
      receive(id) {
        taskReceive(id).then(
            res => {
              console.log(res);
              this.show=true;
              this.exp = res.body.exp;
              this.workpiece = res.body.reward;
              this.$emit('refresh');
              this.$store.commit('refresh');
            }
        )
      }
    },
    props: {
      describe: String,
      state: String,
      id: String,
      taskTime: Number,
      total:Number
    }
  }
</script>

<style scoped>
  .taskItem {
    width: 9rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid #666666;
    font-size: 0.5rem;
    color: white;
  }

  .taskItem p {
    float: left;
    margin-left: 0.5rem;
    line-height: 2rem;
  }

  .button {
    float: right;
    width: 3rem;
    height: 1.5rem;
    margin-top: 0.25rem;
    margin-right: 0.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .able {
    background-color: rgb(177, 235, 179);
  }

  .unable {
    background-color: #777;
  }
</style>
