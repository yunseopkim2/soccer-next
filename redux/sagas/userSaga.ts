import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '../../redux/reducers/userReducer.ts';
import { userApi, loginApi } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserJoinSuccesssType{
    type: string,
    payload: {
        userid : string
    }
}
interface UserLoginSuccesssType{
    type: string,
    payload: {
         userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  ' + JSON.stringify(user))
        const response: UserJoinSuccesssType = yield userApi(user.payload)
        yield put(userActions.joinSuccess(response))
    } catch (error) {
        
        alert('진행 3: saga내부 join 실패  ') 
        yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        alert(' 진행 3: saga내부 login 성공  ' + JSON.stringify(login))
        const response: UserLoginSuccesssType = yield loginApi(login.payload)
        yield put(userActions.loginSuccess(response))
        window.location.href = '/'
    } catch (error) {
        alert('진행 3: saga내부 join 실패  ') 
        yield put(userActions.loginFailure(error))
        window.location.href = '/user/login'
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}