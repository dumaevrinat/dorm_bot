import React, {useState} from 'react'
import store from "../../store"
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import {Container, createMuiTheme, responsiveFontSizes} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/styles"
import HomePage from "../Pages/HomePage"
import CommandsPage from "../Pages/CommandsPage"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from '@material-ui/icons/Menu'
import Context from "../../context"
import NavDrawer from "../NavDrawer"

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#304ffe',
            light: '#7b7cff',
            dark: '#0026ca'
        },
        secondary: {
            main: '#1de9b6',
            light: '#1de9b6',
            dark: '#00b686'
        },
        background: {
            light: '#f1f3f4'
        }
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function App() {
    const classes = useStyles()

    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer)
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={responsiveFontSizes(customTheme)}>
                <Context.Provider value={{toggleDrawer}}>
                    <BrowserRouter>
                        <AppBar position="static" elevation={0}>
                            <Toolbar>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={() => toggleDrawer()}>
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    Dorm bot
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <NavDrawer open={isOpenDrawer}/>

                        <Container maxWidth="md" className={classes.root}>
                            <Switch>
                                <Route path='/' exact component={HomePage}/>
                                <Route path='/commands' component={CommandsPage}/>
                            </Switch>
                        </Container>
                    </BrowserRouter>
                </Context.Provider>
            </ThemeProvider>
        </Provider>
    )
}
