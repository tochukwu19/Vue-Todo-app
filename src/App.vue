<template>
  <div id="app">
    <div class="todo" v-for="(todo,index) in todos" :key="index">
        <p>{{todo}}</p>
        <img src="./assets/remove.png" alt="Remove button" @click="deleteTodo(index)">
    </div>
    <input type="text" name="addTodo" class="addTodo-Input" v-model="addedTodo">
    <button class="addTodo-Btn" @click="addTodo">Add todo</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todos: ["Do your Homework","Go and Code in Vue"],
      addedTodo: ""
    }
  },
  methods:{
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    addTodo(){
      this.todos.push(this.addedTodo)
      this.addedTodo = ""
    }
  }
}
</script>

<style>
  #app{
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .todo{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    border-radius: 15px;
    -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.05);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.05);
    background-color: cornsilk;
    color: darkcyan;
    margin-bottom: 15px;
  }
  .todo img{
    height: 30px;
  }
  .addTodo-Input{
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #333;
    width: 300px;
    margin-bottom: 10px;
    font-size: 16px;
    color: darkcyan;
  }
  .addTodo-Btn{
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333;
    font-size: 16px;
    color: darkcyan;
  }
  .addTodo-Btn:focus{
    outline: none;
  }
</style>
