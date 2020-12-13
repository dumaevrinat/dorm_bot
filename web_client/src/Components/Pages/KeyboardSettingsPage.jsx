import React, {useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {useDispatch, useSelector} from "react-redux";
import Keyboard from "../Keyboard/Keyboard";
import KeyboardButtonSettings from "../KeyboardButtonSettings/KeyboardButtonSettings";
import Context from '../../context'
import Card from "@material-ui/core/Card";
import {
    addKeyboard,
    fetchKeyboards,
} from "../../slices/keyboardsSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardActionArea from "@material-ui/core/CardActionArea";
import {AddRounded} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    info: {
        marginBottom: theme.spacing(4)
    },
    keyboards: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    addAction: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    addActionArea: {
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',

        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}))

export default function KeyboardSettingsPage() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const keyboards = useSelector(state => state.keyboards.keyboards)
    const keyboardStatus = useSelector(state => state.keyboards.status)
    const [currentButtonSettings, setCurrentButtonSettings] = useState(undefined)
    const [openButtonSettings, setOpenButtonSettings] = useState(false)

    useEffect(() => {
            dispatch(fetchKeyboards())
    }, [])


    const handleClickButton = (button, buttonIndex, rowIndex, keyboardIndex) => {
        setCurrentButtonSettings({button, buttonIndex, rowIndex, keyboardIndex})
        setOpenButtonSettings(true)
    }

    const handleAddNew = () => {
        const keyboard = {
            name: "Новая клавиатура",
            data: {
                one_time: false,
                buttons: [
                    [
                        {
                            action: {
                                type: "text",
                                label: "Кнопка",
                                payload: ""
                            },
                            color: "secondary"
                        },

                    ]
                ]
            }
        }

        dispatch(addKeyboard(keyboard))
    }

    return (
        <div className={classes.root}>
            <Context.Provider value={{handleClickButton}}>
                <Typography className={classes.info}>
                    На этой странице можно создать новые клавиатуры для бота, настроить уже существующие.
                </Typography>

                {keyboardStatus === 'loading' && <CircularProgress/>}

                <div className={classes.keyboards}>
                    {keyboardStatus === 'succeeded' && keyboards.map((keyboard, keyboardIndex) =>
                        <Grow key={keyboardIndex} in>
                            <Keyboard keyboardIndex={keyboardIndex} keyboard={keyboard}/>
                        </Grow>
                    )}

                    <Card
                        className={classes.addAction}
                        onClick={() => handleAddNew()}
                    >
                        <CardActionArea className={classes.addActionArea}>
                            <AddRounded/>
                            <Typography variant='subtitle2'>Добавить</Typography>
                        </CardActionArea>
                    </Card>
                </div>

                {openButtonSettings &&
                <KeyboardButtonSettings
                    open={openButtonSettings}
                    onClose={() => setOpenButtonSettings(false)}
                    button={currentButtonSettings.button}
                    keyboardIndex={currentButtonSettings.keyboardIndex}
                    rowIndex={currentButtonSettings.rowIndex}
                    buttonIndex={currentButtonSettings.buttonIndex}
                />
                }
            </Context.Provider>
        </div>
    )
}
