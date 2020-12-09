import React, {useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux";
import {fetchCommands, selectAllCommands} from "../../slices/commandsSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import Command from "../Command";
import CommandAddDialog from "../CommandAddDialog";
import Card from "@material-ui/core/Card";
import {AddRounded} from "@material-ui/icons";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
    },
    info: {
        marginBottom: theme.spacing(4)
    },
    addAction: {
        width: '100%',
        marginBottom: theme.spacing(2)
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
    commands: {
        width: '100%'
    }
}))

export default function CommandSettingsPage() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const commands = useSelector(selectAllCommands)
    const commandsStatus = useSelector(state => state.commands.status)

    const [isOpenCommandAddDialog, setIsOpenCommandAddDialog] = useState(false)

    useEffect(() => {
        if (commandsStatus === 'idle') {
            dispatch(fetchCommands())
        }
    }, [commandsStatus, dispatch])

    return (
        <div className={classes.root}>
            <Typography className={classes.info}>
                На этой странице можно создать новые команды для бота, настроить уже существующие.
            </Typography>

            <Card
                className={classes.addAction}
                variant='outlined'
                onClick={() => setIsOpenCommandAddDialog(true)}
            >
                <CardActionArea className={classes.addActionArea}>
                        <AddRounded/>
                        <Typography variant='subtitle2'>Добавить</Typography>
                </CardActionArea>
            </Card>

            {commandsStatus === 'loading' && <CircularProgress/>}
            <div className={classes.commands}>
                {commandsStatus === 'succeeded' && commands.map(command =>
                    <Command
                        key={command.id}
                        command={command}
                    />
                )}
            </div>
            <CommandAddDialog open={isOpenCommandAddDialog} onClose={() => setIsOpenCommandAddDialog(false)}/>
        </div>
    )
}
