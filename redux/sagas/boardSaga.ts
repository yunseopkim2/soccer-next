import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { boardActions } from '../../redux/reducers/boardReducer.ts';
import { postBoard } from '../api/boardApi.ts'

interface BoardJoinType{
    type: string;
    payload: {  passengerId: string,
            name: string,  
            teamId: string,
            subject: string }
}
interface BoardJoinSuccesssType{
    type: string,
    payload: {
        passengerId : string
    }
}
function* Boardjoin(board: BoardJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  ' + JSON.stringify(board))
        const response: BoardJoinSuccesssType = yield postBoard(board.payload)
        yield put(boardActions.joinSuccess(response))
    } catch (error) {
        
        alert('진행 3: saga내부 join 실패  ') 
        yield put(boardActions.joinFailure(error))
    }
}

export function* watchBoard(){
    yield takeLatest(boardActions.joinRequest, Boardjoin)
}