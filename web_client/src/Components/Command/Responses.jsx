import React, {useContext, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Divider, Typography} from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Context from "../../context";
import InputBase from "@material-ui/core/InputBase";
import {nanoid} from "nanoid";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import {ClearRounded} from "@material-ui/icons";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
    root: {},
    response: {
        display: 'flex',
        overflow: 'auto',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    responseText: {
        width: '100%',
        whiteSpace: 'pre-line',
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
    },
}))

function Response({response, onDelete, onChange}) {
    const classes = useStyles()

    const [expand, setExpand] = useState(false)

    return (
        <ListItem
            className={classes.response}
            key={response.id}
            onMouseOver={() => setExpand(!expand)}
            onMouseOut={() => setExpand(!expand)}
        >
            <InputBase
                className={classes.responseText}
                value={response.response}
                multiline
                rowsMax={5}
                onChange={event => onChange(event.target.value, response.id)}
            />
            <Fade in={expand}>
                <ListItemSecondaryAction>
                    <IconButton size='small' edge="end" onClick={() => onDelete(response.id)}>
                        <ClearRounded/>
                    </IconButton>
                </ListItemSecondaryAction>
            </Fade>
        </ListItem>
    )
}

export default function Responses({responses, commandId}) {
    const classes = useStyles()

    const {handleChangeResponses} = useContext(Context)

    const [newResponse, setNewResponse] = useState(undefined)

    const handleChangeResponseText = (text, id) => {
        const newResponses = responses.map(response => response.id === id ? {...response, response: text} : response)
        handleChangeResponses(newResponses)
    }

    const handleAddNewResponse = (text) => {
        const newResponses = responses.concat({response: text, id: nanoid(), commandId: commandId})
        handleChangeResponses(newResponses)
        setNewResponse('')
    }

    const handleDeleteResponse = (responseId) => {
        const newResponses = responses.filter(response => response.id !== responseId)
        handleChangeResponses(newResponses)
    }

    return (
        <List>
            {responses.map((response) =>
                <div key={response.id}>
                    <Response
                        response={response}
                        onChange={handleChangeResponseText}
                        onDelete={handleDeleteResponse}
                    />
                    <Divider/>
                </div>
            )}
            <ListItem className={classes.response}>
                <InputBase
                    className={classes.responseText}
                    placeholder='Добавить новый ответ'
                    value={newResponse}
                    onChange={event => setNewResponse(event.target.value)}
                    multiline
                    rowsMax={5}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && event.ctrlKey) {
                            handleAddNewResponse(newResponse)
                        }
                    }}
                />
            </ListItem>
        </List>
    )
}