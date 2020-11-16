import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCommands, selectAllCommands} from "../../slices/commandsSlice"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    }
}))

export default function CommandList() {
    const classes = useStyles()

    const dispatch = useDispatch()
    const commands = useSelector(selectAllCommands)
    const commandsStatus = useSelector(state => state.commands.status)

    useEffect(() => {
        if (commandsStatus === 'idle') {
            dispatch(fetchCommands())
        }
    }, [commandsStatus, dispatch])

    return (
        <div className={classes.root}>
            {commandsStatus === 'loading' && <Typography>Loading ...</Typography>}

            <List>
                {commandsStatus === 'succeeded' && commands.map(command =>
                    <ListItem key={command.id}>
                        <ListItemText
                            primary={`id ${command.id}`}
                            secondary={command.text}
                        />
                    </ListItem>
                )}
            </List>
        </div>
    )
}
