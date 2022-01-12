import {ADDTODO,REMOVETODO,DONETODO} from '../actions'

const initialState = {list:[
                            { title: '概要作成' ,complete:false,name:'鈴木',detail:'あ',deadline:'2021-5-31',startdate:'2021-5-1'},
                            { title: '画面設計作成' ,complete:false,name:'佐藤',detail:'あ',deadline:'2021-5-31',startdate:'2021-5-1'},
                            { title: '詳細設計作成' ,complete:false,name:'小島',detail:'あ',deadline:'2021-5-31',startdate:'2021-5-1'},
                            { title: 'コーディング' ,complete:false,name:'山田',detail:'あ',deadline:'2021-5-31',startdate:'2021-5-1'},
                            { title: 'テスト', complete: false ,name:'田島',detail:'あ',deadline:'2021-5-31',startdate:'2021-5-1'}
                            ]
                        }

export default(state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            return {list:[...state.list,action.todo]}
        case REMOVETODO:
            const removeTodos = [...state.list]
            removeTodos.splice(action.index, 1)
            return {list:removeTodos}
        case DONETODO:
            const doneTodos = [...state.list]
            doneTodos[action.index].complete = !doneTodos[action.index].complete
            return {list:doneTodos}
        default:
            return state
    }
}