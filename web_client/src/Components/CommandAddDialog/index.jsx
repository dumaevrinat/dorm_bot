import React, {useContext, useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {useDispatch} from "react-redux";
import Context from "../../context";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {addCommand} from "../../slices/commandsSlice";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    input: {
        marginBottom: theme.spacing(2)
    },
    synonyms: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    response: {
        display: 'flex',
        overflow: 'auto',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    responseText: {
        whiteSpace: 'pre-line'
    },
}))

export default function CommandAddDialog({onClose, open}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(false)
    const [name, setName] = useState('')
    const [priority, setPriority] = useState('')
    const [commandSynonyms, setCommandSynonyms] = useState([])
    const [commandResponses, setCommandResponses] = useState([])
    const [error, setError] = useState(name === undefined || priority === undefined)

    useEffect(() => {
        setError(name === '' || priority === '')
    }, [name, priority])

    const handleAddCommand = () => {
        dispatch(addCommand(
            {name, priority, commandResponses, commandSynonyms, isActive}
        ))
        setName(undefined)
        setPriority(undefined)
        onClose()
    }

    return (
        <Dialog className={classes.root} open={open} onClose={() => onClose()}>
            <DialogTitle>
                Добавить новую команду
            </DialogTitle>
            <DialogContent className={classes.content}>
                <FormControl>
                    <TextField
                        className={classes.input}
                        id="name"
                        label="Название команды"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                    <TextField
                        className={classes.input}
                        id="priority"
                        type="number"
                        label="Приоритет"
                        value={priority}
                        onChange={event => setPriority(event.target.value)}
                    />

                    <FormHelperText error={error}>Заполните все поля</FormHelperText>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>
                    Назад
                </Button>
                <Button disabled={error} onClick={() => handleAddCommand()}>
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}