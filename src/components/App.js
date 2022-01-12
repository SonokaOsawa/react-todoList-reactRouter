import React,{useState} from "react";
import {connect, useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom'
import Home from './Home'
import CreateTodo from './CreateTodo'

const App = () => {
  // const [task, setTask] = useState("")

  // const createTask = (e) => { 
  //       setTask(e.target.value)
  //     }
  // const dispatch = useDispatch()
  // const addTask = () => {
  //   dispatch(addTodo(task))
  //   setTask('')
  // }
  // const todolist = useSelector(state => state.todolist.list)
  // const removeTask = (index) => {
  //   dispatch(removeTodo(index))
  // }
  // const doneTask = (index) => {
  //   dispatch(doneTodo(index))
  // }
  return(
    <Router>
      <div>
        <nav>
          <div>
            <Link to='/'>TODO一覧画面</Link>
          </div>
          <div>
            <Link to='/createtodo'>新規チケット作成</Link>
          </div>
        </nav>

        <Switch>
          <Route path='/createtodo' component={CreateTodo}/>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

// const mapStateToProps = state => ({
//   todo:state.todolist.list
// })

export default App
// export default connect (mapStateToProps)(App)

{/* <h1>Todo List</h1>
      <h2>TODO一覧画面</h2>
      </div>
      <h1>Todo List</h1>
      <h2>TODO一覧画面</h2>

       <input value={task} onChange={createTask} />
       <button onClick={addTask}>追加</button>
       <ul>
          { todolist.map((todo, index) => (
          <li key={ index }>
            {todo.complete ? <del>{ todo.name }</del> : <span>{ todo.name }</span>}
          <button onClick={() => doneTask(index)}>完了</button>
          <button onClick={() => removeTask(index)}>削除</button>
          </li>
         ))}
      </ul> */}