import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {login, setAuthorizationToken} from "../api";


export const fetchLogin = createAsyncThunk(
    'auth/login',
    async ({username, password}) => {
        const response = await login(username, password)

        return {
            username: username,
            token: response.data
        }
    }
)

const initialState = {
    user: null,
    isAuthenticated: false,
    status: 'idle',
    error: null
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
            state.error = action.error.message
        }
    }
})

export const {logout} = authSlice.actions

export default authSlice.reducer