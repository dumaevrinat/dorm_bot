import axios from 'axios'

const baseUrl = 'https://polytech-dorm-bot.herokuapp.com'

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const api = {
    getCommands: () => axios.get(`${baseUrl}/api/v1/commands`),
    saveCommand: (command) => axios.post(`${baseUrl}/api/v1/commands`, command),
    deleteCommand: (commandId) => axios.delete(`${baseUrl}/api/v1/commands/${commandId}`),
    login: (username, password) => axios.post(`${baseUrl}/api/v1/auth/login`, {
        username: username,
        password: password
    }),
    getKeyboards: () => axios.get(`${baseUrl}/api/v1/keyboard`),
    saveKeyboard: (keyboard) => axios.post(`${baseUrl}/api/v1/keyboard`, keyboard),
    deleteKeyboard: (keyboardId) => axios.delete(`${baseUrl}/api/v1/keyboard/${keyboardId}`)
}
