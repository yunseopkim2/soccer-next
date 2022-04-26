import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types.js"



function* addUser(action){
    try {
        const newUser = yield response.json()
        yield put({
            type: T.USER_ADD_SUCCESSED,
            payload: newUser.data
        })
    } catch (error) {
        yield put({
            type: T.USER_ADD_FAILED,
            payload: error.massage
        })
    }
}
function* watchAddUser() {
    yield takeLastest(T.USER_ADD_REQUESTED, addUser)
}

