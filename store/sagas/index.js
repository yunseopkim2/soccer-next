import { all } from 'redux-saga/effects';
import {watchAddUser} from './user.js'

export default function* rootSaga(){
    yield all([
        watchAddUser()
    ])
}