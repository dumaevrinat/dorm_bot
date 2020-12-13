import {useDispatch} from "react-redux";
import {addButton, deleteKeyboard, saveKeyboard, updateKeyboardName} from "../../slices/keyboardsSlice";
import IconButton from "@material-ui/core/IconButton";
import {Add} from "@material-ui/icons";
import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {CardActionArea, Typography} from "@material-ui/core";
import KeyboardButtonSettings from "../KeyboardButtonSettings/KeyboardButtonSettings";
import clsx from "clsx";
import Context from "../../context";
import InputBase from "@material-ui/core/InputBase";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    keyboardPaper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    keyboardTitle: {
        marginBottom: theme.spacing(2),
        height: theme.typography.h6.fontSize,
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(0.5),
    },
    buttonAction: {
        width: '100%',
        height: '100%'
    },
    buttonContent: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1),
    },
    buttonText: {
        whiteSpace: 'pre-line',
    },

    buttonPrimary: {
        backgroundColor: theme.palette.vkButtonPrimary.main,
        color: theme.palette.vkButtonPrimary.contrastText
    },
    buttonSecondary: {
        backgroundColor: theme.palette.vkButtonSecondary.main,
        color: theme.palette.vkButtonSecondary.contrastText
    },
    buttonNegative: {
        backgroundColor: theme.palette.vkButtonNegative.main,
        color: theme.palette.vkButtonNegative.contrastText
    },
    buttonPositive: {
        backgroundColor: theme.palette.vkButtonPositive.main,
        color: theme.palette.vkButtonPositive.contrastText
    },
}))

function KeyboardButton({button, buttonIndex, rowIndex, keyboardIndex}) {
    const classes = useStyles()

    const {handleClickButton} = useContext(Context)

    return (
        <Card
            elevation={0}
            className={clsx(classes.button,
                button.color === 'secondary' && classes.buttonSecondary,
                button.color === 'primary' && classes.buttonPrimary,
                button.color === 'negative' && classes.buttonNegative,
                button.color === 'positive' && classes.buttonPositive
            )}
        >
            <CardActionArea
                className={classes.buttonAction}
                onClick={() => handleClickButton(button, buttonIndex, rowIndex, keyboardIndex)}
            >
                <div className={classes.buttonContent}>
                    <Typography variant='subtitle2'
                                noWrap
                                className={classes.buttonText}
                    >
                        {button.action.label}
                    </Typography>

                </div>
            </CardActionArea>
        </Card>
    )
}

export default function Keyboard({keyboardIndex, keyboard}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const button = {
        action: {
            type: "text",
            label: "Текст",
            payload: ""
        },
        color: "secondary"
    }

    const handleAddNewButton = (keyboard, row) => {
        dispatch(addButton({keyboard, row, button}))
    }

    const handleChangeName = (keyboard, name) => {
        dispatch(updateKeyboardName({keyboard, name}))
    }

    const handleSave = (keyboard) => {
        dispatch(saveKeyboard(keyboard))
    }

    const handleDelete = (keyboardId) => {
        dispatch(deleteKeyboard(keyboardId))
    }

    return (
        <Card className={classes.keyboardPaper}>
            <InputBase
                className={classes.keyboardTitle}
                value={keyboard.name}
                onChange={(event) => handleChangeName(keyboardIndex, event.target.value)}
            />

            <div className={classes.root}>
                {keyboard.data.buttons.map((row, rowIndex) =>
                    <div key={rowIndex} className={classes.row}>
                        {row.map((button, buttonIndex) =>
                            <KeyboardButton
                                key={buttonIndex}
                                button={button}
                                buttonIndex={buttonIndex}
                                rowIndex={rowIndex}
                                keyboardIndex={keyboardIndex}
                            />
                        )}
                        <IconButton
                            size="small"
                            disabled={row.length === 5}
                            onClick={() => handleAddNewButton(keyboardIndex, rowIndex)}
                        >
                            <Add fontSize="inherit"/>
                        </IconButton>
                    </div>
                )}

                <div className={classes.button}>
                    <IconButton size="small"
                                onClick={() => handleAddNewButton(keyboardIndex, keyboard.data.buttons.length)}>
                        <Add fontSize="inherit"/>
                    </IconButton>
                </div>
            </div>

            <CardActions className={classes.actions}>
                <Button
                    onClick={() => handleSave(keyboard)}
                >
                    Сохранить
                </Button>

                <Button onClick={() => handleDelete(keyboard.id)}>
                    Удалить
                </Button>
            </CardActions>
        </Card>
    )
}
