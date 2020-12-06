import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {useDispatch, useSelector} from "react-redux";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {logout} from "../../slices/authSlice";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
    },
    userInfo: {
        marginBottom: theme.spacing(2)
    }
}))

export default function UserPopover({anchorEl, onClose}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={onClose}
            elevation={2}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div className={classes.root}>
                <div className={classes.userInfo}>
                    <Typography variant='body1' color='textSecondary'>
                        Выполнен вход как:
                    </Typography>
                    <Typography variant='body1' component='span'>
                        <Box fontWeight="fontWeightMedium">
                            {user.username}
                        </Box>
                    </Typography>
                </div>

                <Button onClick={() => handleLogout()}>
                    Выйти
                </Button>
            </div>
        </Popover>
    )
}