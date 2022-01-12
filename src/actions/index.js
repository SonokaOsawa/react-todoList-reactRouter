export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'
export const DONETODO = 'doneTodo'

export const addTodo = (task,detail,name,deadline,startdate) => ({
    type:ADDTODO,
    todo:{title:task,complete:false,detail:detail,name:name,deadline:deadline,startdate:startdate}
})

export const removeTodo = (index) => ({
    type:REMOVETODO,
    index:index
})

export const doneTodo = (index) => ({
    type:DONETODO,
    index:index
})