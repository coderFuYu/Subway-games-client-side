<template>
  <ViewSpace :title="'任务'" @back-click="back()">
    <div slot="content" class="task">
      <TaskList :task-data="taskData" @refresh="getTaskListMethod()"/>
    </div>
  </ViewSpace>
</template>

<script>
  import ViewSpace from "components/content/viewSpace/ViewSpace";
  import TaskList from "../components/content/task/TaskList";
  import {getTaskList} from "network/task"

  export default {
    name: "Task",
    data(){
      return{
        taskData:[]
      }
    },
    components: {
      ViewSpace,
      TaskList
    },
    created() {
      this.getTaskListMethod();
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      getTaskListMethod() {
        getTaskList().then(res => {
          this.taskData=res.body;
        })
      }
    }
  }
</script>

<style scoped>
  .task {
    margin-top: 2rem;
  }
</style>
