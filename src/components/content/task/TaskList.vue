<template>
  <div>
    <TaskItem v-for="item in taskData" :describe="item.message" :state="item.state" :taskTime="item.taskTime"
              :id="item.id" :total="item.taskLimit" @refresh="$emit('refresh')" :key="item.message"/>
  </div>
</template>

<script>
  import TaskItem from "./TaskItem";

  export default {
    name: "TaskList",
    props: {
      taskData: Array
    },
    components: {
      TaskItem
    }
  }
</script>

<style scoped>

</style>
