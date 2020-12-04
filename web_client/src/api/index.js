import axios from 'axios'

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const getCommands = () => {
    return axios.get('https://polytech-dorm-bot.herokuapp.com/api/v1/commands')
}

export const login = (username, password) => {
    return axios.post('https://polytech-dorm-bot.herokuapp.com/api/v1/auth/login', {
        username: username,
        password: password
    })
}
