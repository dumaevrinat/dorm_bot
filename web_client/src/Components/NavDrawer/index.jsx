import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Context from "../../context"
import {useHistory} from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import {Toolbar} from "@material-ui/core"
import {
    ForumOutlined, HomeOutlined,
    KeyboardOutlined,
    TimelineRounded, TuneRounded
} from "@material-ui/icons"
import ListItemIcon from "@material-ui/core/ListItemIcon"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(0, 1)
    },
    drawerItem: {
        borderRadius: theme.spacing(1, 1, 1, 1)
    },
    paper: {
        width: 300,
        border: 'none',
    },
    list: {
        padding: theme.spacing(1)
    }
}))

const pages = [
    {
        title: 'Главная',
        icon: <HomeOutlined/>,
        path: '/'
    },
    {
        title: 'Настройки бота',
        icon: <TuneRounded/>,
        path: '/app/bot_settings'
    },
    {
        title: 'Настройки команд',
        icon: <ForumOutlined/>,
        path: '/app/command_settings'
    },
    {
        title: 'Настройки клавиатуры',
        icon: <KeyboardOutlined/>,
        path: '/app/keyboard_settings'
    },
    {
        title: 'Статистика',
        icon: <TimelineRounded/>,
        path: '/app/statistics'
    }
]

function DrawerItem({text, icon, onClick}) {
    const classes = useStyles()

    return (
        <ListItem
            button
            className={classes.drawerItem}
            onClick={() => onClick()}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    )
}

export default function NavDrawer({open}) {
    const classes = useStyles()
    const history = useHistory()

    const {toggleDrawer} = useContext(Context)

    const goPage = (pagePath) => {
        history.push(pagePath)
        toggleDrawer()
    }

    return (
        <Drawer
            anchor='left'
            open={open}
            onClose={() => toggleDrawer()}
            classes={{
                paper: classes.paper,
            }}
        >
            <Toolbar>
                <Typography variant="h6">
                    Dorm bot
                </Typography>
            </Toolbar>
            <List className={classes.list}>
                {pages.map(page =>
                    <DrawerItem
                        key={page.path}
                        text={page.title}
                        onClick={() => goPage(page.path)}
                        icon={page.icon}
                    />
                )}
            </List>
        </Drawer>
    )
}
