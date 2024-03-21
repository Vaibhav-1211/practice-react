import TodoItem from "./components/todoitem"
import AddTodo from "./components/addtodo"
import AppName from "./components/appname"


const App = () => {

  return (
    <center className='todo-container'>
      <AppName />
      <hr />
      <AddTodo />
      <TodoItem todoDate="19-03-2024" todoName="Buy Milk" />
      <TodoItem todoDate="19-03-2024" todoName="Buy Milk" />
    </center>

  )
}

export default App
