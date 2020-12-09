import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {useSelector} from "react-redux";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import green from "@material-ui/core/colors/green";
import {ErrorOutline} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer - 1,
        display: 'flex',
        bottom: 0,
        flexDirection: 'column-reverse',
        position: 'fixed',
    },
    alert: {
        display: 'flex',
        alignItems: 'center',
        width: 250,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        marginTop: theme.spacing(0),
        backgroundColor: green['A100'],
    },
    message: {
        marginLeft: theme.spacing(2),
        whiteSpace: 'pre-line'
    }
}))

function Alert({message}) {
    const classes = useStyles()

    return (
        <Paper elevation={0} className={classes.alert}>
            <IconButton size='small'>
                <ErrorOutline/>
            </IconButton>
            <Typography variant='body2' noWrap className={classes.message}>
                {message}
            </Typography>
        </Paper>
    )
}

export default function Notifier() {
    const classes = useStyles()

    const errors = useSelector(state => state.error.errors)

    return (
        <div className={classes.root}>
            {errors.map(error =>
                <Slide direction="right" in key={error.id} mountOnEnter unmountOnExit>
                    <div>
                        <Alert
                            message={error.message}
                        />
                    </div>
                </Slide>
            )}
        </div>
    )
}