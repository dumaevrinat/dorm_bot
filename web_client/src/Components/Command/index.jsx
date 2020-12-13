import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {CardContent, Typography} from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Switch from "@material-ui/core/Switch";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from "@material-ui/core/Collapse";
import {useDispatch} from "react-redux";
import {deleteCommand, updateCommand, updateCommandState} from "../../slices/commandsSlice";
import InputBase from "@material-ui/core/InputBase";
import Context from '../../context'
import Responses from "./Responses";
import Synonyms from "./Synonyms";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    header: {
        display: "flex",
        alignItems: "center"
    },
    title: {
        maxWidth: 150,
        marginRight: theme.spacing(1),
        height: theme.typography.h6.fontSize,
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
    },
    priority: {
        maxWidth: 50,
        height: theme.typography.subtitle2.fontSize,
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.subtitle2.fontWeight,
        color: theme.palette.text.secondary
    },
    content: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    contentSubtitle: {
        marginTop: theme.spacing(2)
    },
    actions: {
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 'auto'
    },
    synonyms: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    active: {
        marginRight: theme.spacing(2)
    },
    expand: {
        marginLeft: theme.spacing(1),
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    indent: {
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))

export default function Command({command}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [expanded, setExpanded] = useState(false)
    const [hasChanges, setHasChanges] = useState(false)

    const [expandedSynonyms, setExpandedSynonyms] = useState(false)
    const [expandedResponses, setExpandedResponses] = useState(false)


    const handleActive = (command) => {
        dispatch(updateCommand({
            ...command,
            isActive: !command.isActive
        }))
    }

    const handleChangeName = (name) => {
        setHasChanges(true)
        dispatch(updateCommandState({...command, name: name}))
    }

    const handleChangePriority = (priority) => {
        setHasChanges(true)
        dispatch(updateCommandState({...command, priority: priority}))
    }

    const handleChangeSynonyms = (synonyms) => {
        setHasChanges(true)
        dispatch(updateCommandState({...command, commandSynonyms: synonyms}))
    }

    const handleChangeResponses = (responses) => {
        setHasChanges(true)
        dispatch(updateCommandState({...command, commandResponses: responses}))
    }

    const handleDelete = (commandId) => {
        dispatch(deleteCommand(commandId))
    }

    const save = () => {
        dispatch(updateCommand(command))
        setHasChanges(false)
    }

    return (
        <Card className={classes.root}>
            <Context.Provider value={{handleChangeResponses, handleChangeSynonyms}}>
                <div className={classes.header}>
                    <Switch
                        color='primary'
                        className={classes.active}
                        checked={command.isActive}
                        onChange={() => handleActive(command)}
                    />
                    <InputBase
                        className={classes.title}
                        value={command.name}
                        onChange={(event) => handleChangeName(event.target.value)}
                    />

                    <InputBase
                        className={classes.priority}
                        type='number'
                        value={command.priority}
                        onChange={(event) => handleChangePriority(event.target.value)}
                    />

                    <IconButton
                        className={clsx(classes.expand, classes.indent, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </div>

                <Collapse in={expanded}>
                    <CardContent className={classes.content}>
                        <div className={classes.header}>
                            <Typography className={classes.contentSubtitle} paragraph variant="subtitle2">
                                Синонимы
                            </Typography>
                            <IconButton
                                size='small'
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedSynonyms,
                                })}
                                onClick={() => setExpandedSynonyms(!expandedSynonyms)}
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </div>

                        <Collapse in={expandedSynonyms}>
                            <Synonyms synonyms={command.commandSynonyms} commandId={command.id}/>
                        </Collapse>

                        <div className={classes.header}>
                            <Typography className={classes.contentSubtitle} paragraph variant="subtitle2">
                                Ответы
                            </Typography>
                            <IconButton
                                size='small'
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedResponses,
                                })}
                                onClick={() => setExpandedResponses(!expandedResponses)}
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </div>

                        <Collapse in={expandedResponses}>
                            <Responses responses={command.commandResponses} commandId={command.id}/>
                        </Collapse>

                    </CardContent>

                    <CardActions className={classes.actions}>
                        {hasChanges &&
                        <Button
                            color='primary'
                            variant='contained'
                            disableElevation
                            onClick={() => save()}
                        >
                            Сохранить
                        </Button>
                        }

                        <Button onClick={() => handleDelete(command.id)}>
                            Удалить
                        </Button>
                    </CardActions>
                </Collapse>
            </Context.Provider>

        </Card>
    )
}