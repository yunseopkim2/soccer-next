import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer.ts';
import { postAdd } from '../api/todoApi.ts'

interface TodoJoinType{
    type: string;
    payload: { userid: string, task: string, completed: string }
}
interface TodoJoinSuccesssType{
    type: string,
    payload: {
        userid : string
    }
}
function* Todojoin(todo: TodoJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  ' + JSON.stringify(todo))
        const response: TodoJoinSuccesssType = yield postAdd(todo.payload)
        yield put(todoActions.addSuccess(response))
    } catch (error) {
        
        alert('진행 3: saga내부 join 실패  ') 
        yield put(todoActions.addFailure(error))
    }
}


export function* watchAdd(){
    yield takeLatest(todoActions.addRequest, Todojoin)
}