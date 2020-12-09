import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";


export const createError = createAsyncThunk('error/create', async (message, {dispatch, getState}) => {
    const id = nanoid()
    dispatch(addError({message, id}))

    setTimeout(() => {
        dispatch(deleteError(id))
    }, getState().error.duration)
})

const initialState = {
    errors: [],
    maxErrors: 3,
    duration: 3000
}

const errorSlice = createSlice({
    name: 'error',
    initialState: initialState,
    reducers: {
        addError: (state, action) => {
            if (state.errors.length === state.maxErrors)
                state.errors.shift()
            state.errors.push(action.payload)
        },
        deleteError: (state, action) => {
            state.errors = state.errors.filter(error => error.id !== action.payload)
        }
    }
})

export const {addError, deleteError} = errorSlice.actions

export default errorSlice.reducer
