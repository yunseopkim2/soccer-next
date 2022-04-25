import { createSlice } from "@reduxjs/toolkit"

export interface todoType{
            userid: string;
            task: string;  
            completed: string; // value T F 
  
}

// state
export interface TodoState{
    loading: boolean;
    data: todoType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addRequest(state: TodoState, payload) {
            alert('진행 2: 리듀서 내부');
            state.loading = true;
        },
        addSuccess(state, { payload }) {
            state.data = [...state.data, payload]
            state.loading = false;
        },

        addFailure(state, { payload }) {
            state.data = payload
            state.loading = false
        }
    }
})
const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer
