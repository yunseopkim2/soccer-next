import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface boardType{
    

            passengerId: string;
            name: string;  
            teamId: string;
            subject: string;  
        
    
}

// state
export interface boardState{
    loading: boolean;
    data: boardType[];
    error: any;
}


const initialState: boardState = {
    
    loading: false,
    data: [],
    error: null
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        joinRequest(state: boardState, payload) {
            alert('진행 2: 리듀서 내부');
            state.loading = true;
        },
        joinSuccess(state, { payload }) {
            state.data = [...state.data, payload]
            state.loading = false;
        },

        joinFailure(state, { payload }) {
            state.data = payload
            state.loading = false
        }
    }
})
const { reducer, actions } = boardSlice
export const boardActions = actions
export default reducer