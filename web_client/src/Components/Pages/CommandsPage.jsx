import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"
import CommandList from "../CommandList"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
}))

export default function CommandsPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant='h6'>
                Commands page
            </Typography>
            <CommandList/>
        </div>
    )
}