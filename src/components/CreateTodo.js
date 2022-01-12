import React,{useState} from "react";
import {connect,useDispatch} from 'react-redux';
import {addTodo} from '../actions';

const CreateTodo = () => {
    const [task, setTask] = useState("")
    const [name, setName] = useState("")
    const [detail,setDetail] = useState("")
    const [deadline,setDeadline] = useState("")
    const [startdate,setStartdate] = useState("")

  const createTask = (e) => { 
        setTask(e.target.value)
      }
      const createName = (e) => {
          setName(e.target.value)
      }
      const createDetail = (e) => {
          setDetail(e.target.value)
      }
      const createDeadline = (e) => {
          setDeadline(e.target.value)
      }
      const createStartdate = (e) => {
          setStartdate(e.target.value)
      }
  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo(task,name,detail,deadline,startdate))
    setTask('')
    setDetail('')
    setName('')
    setDeadline('')
    setStartdate('')
  }
  
  return(
      <React.Fragment>
          <h2>チケット作成</h2>
          <ul>
        <li>チケット名：<input value={task} onChange={createTask} /></li>
        <li>詳細：<textarea value={detail} onChange={createDetail} /></li>
        <li>担当者：<input value={name} onChange={createName} /></li>
        <li>期日：<input type='date' value={deadline} onChange={createDeadline} /></li>
        <li>開始日：<input type='date' value={startdate} onChange={createStartdate} /></li>
        </ul>
        <button onClick={addTask}>追加</button>
       </React.Fragment>
  )
}

const mapStateToProps = state => ({
    todo:state.todolist.list
  })
  

export default connect (mapStateToProps)(CreateTodo)