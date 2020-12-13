import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api, setAuthorizationToken} from "../api";
import {createNotification} from "./notificationSlice";


export const fetchLogin = createAsyncThunk('auth/login', async ({username, password}, {dispatch, rejectWithValue}) => {
        try {
            const response = await api.login(username, password)

            return {
                username: username,
                token: response.data
            }
        } catch (e) {
            dispatch(createNotification('Не удалось войти'))
            return rejectWithValue(e)
        }
    }
)

const initialState = {
    user: null,
    isAuthenticated: false,
    status: 'idle',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state, action) => {
            setAuthorizationToken(null)

            state.isAuthenticated = false
            state.user = null
        }
    },
    extraReducers: {
        [fetchLogin.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchLogin.fulfilled]: (state, action) => {
            setAuthorizationToken(action.payload.token)

            state.status = 'succeeded'
            state.user = action.payload
            state.isAuthenticated = true
        },
        [fetchLogin.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export const {logout} = authSlice.actions

export default authSlice.reducer