import React from "react";
import { connect, useDispatch, useSelector } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import { removeTodo, doneTodo } from '../actions';
import Detail from './Detail';

const Home = () => {
  const dispatch = useDispatch()
  const todolist = useSelector(state => state.todolist.list)
  const removeTask = (index) => {
    dispatch(removeTodo(index))
  }
  const doneTask = (index) => {
    dispatch(doneTodo(index))
  }
  return (
    <Router>
      <div>
        <h2>TODO一覧</h2>
        <ol>
          {todolist.map((todo, index) => (
            <li key={index}><Link to={`Detail/${index}`}>
              {todo.complete ? <del>{todo.title}</del> : <span>{todo.title}</span>}
              <span> : {todo.name}</span></Link>
              <button onClick={() => doneTask(index)}>完了</button>
              <button onClick={() => removeTask(index)}>削除</button>
            </li>
          ))}
        </ol>
      </div>
      <Switch>
        <Route path='/Detail/:index' component={Detail}></Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  todo: state.todolist.list
})


export default connect(mapStateToProps)(Home)