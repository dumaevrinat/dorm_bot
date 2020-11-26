import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Context from "../../context"
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
    },
    menu: {
        marginLeft: 'auto'
    }
}))

export default function Header() {
    const classes = useStyles()

    const {toggleDrawer} = useContext(Context)

    return (
        <AppBar color='inherit' position="fixed" elevation={0}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={() => toggleDrawer()}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Dorm bot
                </Typography>

                <div className={classes.menu}>
                        <IconButton
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}
