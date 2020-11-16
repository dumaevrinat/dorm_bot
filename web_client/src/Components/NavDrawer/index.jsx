import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Context from "../../context"
import {useHistory} from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    list: {
        width: 250,
    }
}))

export default function NavDrawer({open}) {
    const classes = useStyles()
    const history = useHistory()

    const {toggleDrawer} = useContext(Context)

    const goPage = (pagePath) => {
        history.push(`/${pagePath}`)
        toggleDrawer()
    }

    return (
        <Drawer
            anchor='left'
            open={open}
            onClose={() => toggleDrawer()}
        >
            <List className={classes.list}>
                <ListItem button onClick={() => goPage('')}>
                    <ListItemText primary='Home'/>
                </ListItem>

                <ListItem button onClick={() => goPage('commands')}>
                    <ListItemText primary='Commands'/>
                </ListItem>
            </List>
        </Drawer>
    )
}
