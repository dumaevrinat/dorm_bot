import React, {useContext, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Divider} from "@material-ui/core"
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

function Synonym({synonym, onDelete, onChange}) {
    const classes = useStyles()

    const [expand, setExpand] = useState(false)

    return (
        <ListItem
            className={classes.response}
            key={synonym.id}
            onMouseOver={() => setExpand(!expand)}
            onMouseOut={() => setExpand(!expand)}
        >
            <InputBase
                className={classes.responseText}
                value={synonym.synonym}
                multiline
                rowsMax={5}
                onChange={event => onChange(event.target.value, synonym.id)}
            />
            <Fade in={expand}>
                <ListItemSecondaryAction>
                    <IconButton size='small' edge="end" onClick={() => onDelete(synonym.id)}>
                        <ClearRounded/>
                    </IconButton>
                </ListItemSecondaryAction>
            </Fade>
        </ListItem>
    )
}

export default function Synonyms({synonyms, commandId}) {
    const classes = useStyles()

    const {handleChangeSynonyms} = useContext(Context)

    const [newSynonym, setNewSynonym] = useState(undefined)

    const handleChangeSynonymText = (text, id) => {
        const newSynonyms = synonyms.map(synonym => synonym.id === id ? {...synonym, synonym: text} : synonym)
        handleChangeSynonyms(newSynonyms)
    }

    const handleAddNewSynonym = (text) => {
        const newSynonyms = synonyms.concat({synonym: text, id: nanoid(), commandId: commandId})
        handleChangeSynonyms(newSynonyms)
        setNewSynonym('')
    }

    const handleDeleteSynonym = (synonymId) => {
        const newSynonyms = synonyms.filter(synonym => synonym.id !== synonymId)
        handleChangeSynonyms(newSynonyms)
    }

    return (
        <List>
            {synonyms.map((synonym) =>
                <div key={synonym.id}>
                    <Synonym
                        synonym={synonym}
                        onChange={handleChangeSynonymText}
                        onDelete={handleDeleteSynonym}
                    />
                    <Divider/>
                </div>
            )}
            <ListItem className={classes.response}>
                <InputBase
                    className={classes.responseText}
                    placeholder='Добавить новый синоним'
                    value={newSynonym}
                    onChange={event => setNewSynonym(event.target.value)}
                    multiline
                    rowsMax={5}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && event.ctrlKey) {
                            handleAddNewSynonym(newSynonym)
                        }
                    }}
                />
            </ListItem>
        </List>
    )
}