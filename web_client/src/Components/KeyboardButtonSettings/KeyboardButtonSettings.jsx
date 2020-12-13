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
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {FormLabel} from "@material-ui/core";
import {deleteButton, updateButton} from "../../slices/keyboardsSlice";

const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    margin: {
        marginBottom: theme.spacing(4)
    },
}))

export default function KeyboardButtonSettings({open, onClose, button, buttonIndex, keyboardIndex, rowIndex}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [label, setLabel] = useState(button.action.label)
    const [color, setColor] = useState(button.color)

    const [error, setError] = useState(label === '')

    useEffect(() => {
        setError(label === '')
    }, [label])

    const handleSave = () => {
        onClose()

        const newButton = {
            ...button,
            action: {
                ...button.action,
                label: label
            },
            color: color
        }

        dispatch(updateButton({
            keyboard: keyboardIndex,
            row: rowIndex,
            index: buttonIndex,
            button: newButton
        }))
    }

    const handleDelete = () => {
        onClose()

        dispatch(deleteButton({
            keyboard: keyboardIndex,
            row: rowIndex,
            index: buttonIndex
        }))
    }

    return (
        <Dialog className={classes.root} open={open} onClose={() => onClose()}>
            <DialogTitle>
                Изменить кнопку
            </DialogTitle>
            <DialogContent className={classes.content}>
                <FormControl>
                    <TextField
                        className={classes.margin}
                        id="name"
                        label="Текст кнопки"
                        value={label}
                        onChange={event => setLabel(event.target.value)}
                    />

                    <FormLabel>Цвет</FormLabel>

                    <RadioGroup className={classes.margin} value={color} onChange={event => setColor(event.target.value)}>
                        <FormControlLabel value="primary" control={<Radio color='primary'/>} label="Primary"/>
                        <FormControlLabel value="secondary" control={<Radio color='primary'/>} label="Secondary"/>
                        <FormControlLabel value="negative" control={<Radio color='primary'/>} label="Negative"/>
                        <FormControlLabel value="positive" control={<Radio color='primary'/>} label="Positive"/>
                    </RadioGroup>

                    <FormHelperText error={error}>Заполните все поля</FormHelperText>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>
                    Назад
                </Button>
                <Button onClick={() => handleDelete()}>
                    Удалить
                </Button>
                <Button disabled={error} onClick={() => handleSave()}>
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    )
}