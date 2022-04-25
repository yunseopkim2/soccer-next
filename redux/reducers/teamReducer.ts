import { createSlice } from "@reduxjs/toolkit"

const initialState = []


export const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        addteam: (state, action) => {
            alert('리듀서 내부로 들어온 할일은 ? '+JSON.stringify(action))
            // const todo = JSON.stringify(action)
            
        }
    }
})
export const { addteam } = teamSlice.actions
export default teamSlice.reducer