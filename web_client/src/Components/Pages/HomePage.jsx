import React from "react"
import {useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}))

export default function HomePage() {
    const classes = useStyles()
    const history = useHistory()

    const goLogin = () => {
        history.push('/login')
    }

    return (
        <div className={classes.root}>
            <Typography variant='h6'>
                Главная
            </Typography>

            <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={goLogin}
            >
                Войти в аккаунт
            </Button>
        </div>
    )
}
