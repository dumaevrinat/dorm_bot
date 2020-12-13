import React, {useEffect, useState} from "react"
import {useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../../slices/authSlice";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4)
    },
    input: {
        marginTop: theme.spacing(4)
    },
}))

export default function LoginPage() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [username, setUsername] = useState('user')
    const [password, setPassword] = useState('user')

    const status = useSelector(state => state.auth.status)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const error = useSelector(state => state.auth.error)

    const handleLogin = (username, password) => {
        dispatch(fetchLogin({username, password}))
    }

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/app/bot_settings')
        }
    }, [history, isAuthenticated])

    return (
        <div className={classes.root}>
            <Grow in>
                <Paper variant='outlined' className={classes.card}>
                    <Typography variant='h6'>
                        Вход
                    </Typography>

                    <TextField
                        className={classes.input}
                        id="username"
                        label="Имя пользователя"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />

                    <TextField
                        className={classes.input}
                        id="password"
                        label="Пароль"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />

                    <Button
                        className={classes.input}
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={status === 'loading'}
                        disableElevation
                        onClick={() => handleLogin(username, password)}
                    >
                        Войти
                    </Button>
                </Paper>
            </Grow>
        </div>
    )
}
