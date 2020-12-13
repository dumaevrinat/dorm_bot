import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";


export const createNotification = createAsyncThunk('notification/create', async (message, {dispatch, getState}) => {
    const id = nanoid()
    dispatch(addNotification({message, id}))

    setTimeout(() => {
        dispatch(deleteNotification(id))
    }, getState().notification.duration)
})

const initialState = {
    notifications: [],
    maxNotifications: 3,
    duration: 3000
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        addNotification: (state, action) => {
            if (state.notifications.length === state.maxNotifications)
                state.notifications.shift()
            state.notifications.push(action.payload)
        },
        deleteNotification: (state, action) => {
            state.notifications = state.notifications.filter(error => error.id !== action.payload)
        }
    }
})

export const {addNotification, deleteNotification} = notificationSlice.actions

export default notificationSlice.reducer
