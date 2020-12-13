import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api";
import {createNotification} from "./notificationSlice";
import {addCommandState} from "./commandsSlice";

export const fetchKeyboards = createAsyncThunk('keyboards/fetchKeyboards', async (_, {dispatch, rejectWithValue}) => {
    try {
        const response = await api.getKeyboards()

        return response.data
    } catch (e) {
        dispatch(createNotification('Не удалось получить клавиатуры'))
        return rejectWithValue(e)
    }
})

export const saveKeyboard = createAsyncThunk('keyboards/saveKeyboard', async (keyboard, {dispatch}) => {
    try {
        const response = await api.saveKeyboard(keyboard)
        dispatch(updateKeyboardState(response.data))

        dispatch(createNotification('Клавиатура сохранена'))
    } catch (e) {
        dispatch(createNotification('Не удалось обновить клавиатуру'))
    }
})

export const deleteKeyboard = createAsyncThunk('keyboards/deleteKeyboard', async (keyboardId, {dispatch}) => {
    dispatch(deleteKeyboardState(keyboardId))

    try {
        await api.deleteKeyboard(keyboardId)

        dispatch(createNotification('Клавиатура удалена'))
    } catch (e) {
        dispatch(createNotification('Не удалось удалить клавиатуру'))
    }
})

export const addKeyboard = createAsyncThunk('keyboard/addKeyboard', async (keyboard, {dispatch}) => {
    try {
        const response = await api.saveKeyboard(keyboard)
        dispatch(addKeyboardState(response.data))
        dispatch(createNotification('Клавиатура добавлена'))
    } catch (e) {
        dispatch(createNotification('Не удалось добавить клавиатуру'))
    }
})

const initialState = {
    keyboards: [],
    status: 'idle',
}

const keyboardsSlice = createSlice({
    name: 'keyboards',
    initialState: initialState,
    reducers: {
        addButton: (state, action) => {
            const keyboard = state.keyboards[action.payload.keyboard]

            if (keyboard.data.buttons.reduce((length, row) => length + row.length, 0) <= 40) {
                if (action.payload.row > keyboard.data.buttons.length - 1) {
                    keyboard.data.buttons.push([])
                }
                if (keyboard.data.buttons[action.payload.row].length < 5) {
                    keyboard.data.buttons[action.payload.row].push(action.payload.button)
                }
            }
        },
        deleteButton: (state, action) => {
            const keyboard = state.keyboards[action.payload.keyboard]

            if (keyboard.data.buttons.reduce((length, row) => length + row.length, 0) > 1) {
                if (keyboard.data.buttons[action.payload.row].length > 1) {
                    keyboard.data.buttons[action.payload.row].splice(action.payload.index, 1)
                } else {
                    keyboard.data.buttons.splice(action.payload.row, 1)
                }
            }
        },
        updateButton: (state, action) => {
            const keyboard = state.keyboards[action.payload.keyboard]

            keyboard.data.buttons[action.payload.row][action.payload.index] = action.payload.button
        },
        updateKeyboardName: (state, action) => {
            state.keyboards[action.payload.keyboard].name = action.payload.name
        },
        updateKeyboardState: (state, action) => {
            state.keyboards = state.keyboards.map(keyboard => keyboard.id === action.payload.id ? action.payload : keyboard)
        },
        deleteKeyboardState: (state, action) => {
            state.keyboards = state.keyboards.filter(keyboard => keyboard.id !== action.payload)
        },
        addKeyboardState: (state, action) => {
            state.keyboards.push(action.payload)
        }
    },
    extraReducers: {
        [fetchKeyboards.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchKeyboards.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.keyboards = action.payload
        },
        [fetchKeyboards.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export const selectAllButtonsCount = (keyboard) =>
    (state) => state.keyboards[keyboard].buttons
        .reduce((length, row) => length + row.length, 0)

export const {
    addButton,
    deleteButton,
    updateButton,
    updateKeyboardName,
    updateKeyboardState,
    deleteKeyboardState,
    addKeyboardState
} = keyboardsSlice.actions

export default keyboardsSlice.reducer