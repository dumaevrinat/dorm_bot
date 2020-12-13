import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from "../api"
import {createNotification} from "./notificationSlice";


export const fetchCommands = createAsyncThunk('commands/fetchCommands', async (_, {dispatch, rejectWithValue}) => {
    try {
        const response = await api.getCommands()

        return response.data
    } catch (e) {
        dispatch(createNotification('Не удалось получить команды'))
        return rejectWithValue(e)
    }
})

export const addCommand = createAsyncThunk('commands/addCommand', async (command, {dispatch}) => {
    try {
        const response = await api.saveCommand(command)
        dispatch(addCommandState(response.data))
        dispatch(createNotification('Команда добавлена'))
    } catch (e) {
        dispatch(createNotification('Не удалось добавить команду'))
    }
})


export const updateCommand = createAsyncThunk('commands/saveCommand', async (command, {dispatch}) => {
    dispatch(updateCommandState(command))

    const newCommand = {
        ...command,
        commandResponses: command.commandResponses.map(response => ({...response, id: 0})),
        commandSynonyms: command.commandSynonyms.map(synonym => ({...synonym, id: 0}))
    }

    try {
        const response = await api.saveCommand(newCommand)
        dispatch(updateCommandState(response.data))
        dispatch(createNotification('Команда сохранена'))
    } catch (e) {
        dispatch(createNotification('Не удалось обновить команду'))
    }
})

export const deleteCommand = createAsyncThunk('commands/deleteCommand', async (commandId, {dispatch}) => {
    dispatch(deleteCommandState(commandId))

    try {
        await api.deleteCommand(commandId)
        dispatch(createNotification('Команда удалена'))
    } catch (e) {
        dispatch(createNotification('Не удалось удалить команду'))
    }

})

const initialState = {
    commands: [],
    status: 'idle',
}

const commandsSlice = createSlice({
    name: 'commands',
    initialState: initialState,
    reducers: {
        updateCommandState: (state, action) => {
            state.commands = state.commands.map(command => command.id === action.payload.id ? action.payload : command)
        },
        deleteCommandState: (state, action) => {
            state.commands = state.commands.filter(command => command.id !== action.payload)
        },
        addCommandState: (state, action) => {
            state.commands.push(action.payload)
        }
    },
    extraReducers: {
        [fetchCommands.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchCommands.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.commands = action.payload
        },
        [fetchCommands.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export const selectAllCommands = (state) => state.commands.commands

export const {updateCommandState, deleteCommandState, addCommandState} = commandsSlice.actions

export default commandsSlice.reducer