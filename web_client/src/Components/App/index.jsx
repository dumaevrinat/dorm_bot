import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Redirect, BrowserRouter, Route, Switch} from "react-router-dom"
import {Container, createMuiTheme, responsiveFontSizes} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/styles"
import HomePage from "../Pages/HomePage"
import Context from "../../context"
import NavDrawer from "../NavDrawer"
import Header from "../Header"
import BotSettingsPage from "../Pages/BotSettingsPage"
import CommandSettingsPage from "../Pages/CommandSettingsPage"
import KeyboardSettingsPage from "../Pages/KeyboardSettingsPage"
import StatisticsPage from "../Pages/StatisticsPage"
import Toolbar from "@material-ui/core/Toolbar"
import LoginPage from "../Pages/LoginPage"
import Notifier from "../Notifier";

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
        },
        vkButtonPrimary: {
            main: '#5181B8',
            contrastText: '#fff'
        },
        vkButtonSecondary: {
            main: '#e5ebf1',
            contrastText: 'rgb(0 0 0 / 87%)'
        },
        vkButtonNegative: {
            main: '#E64646',
            contrastText: '#fff'
        },
        vkButtonPositive: {
            main: '#4BB34B',
            contrastText: '#fff'
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
        ].join(','),
    },
})

const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    }
}))

function AppLayout({children}) {
    const classes = useStyles()

    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer)
    }

    return (
        <div>
            <Context.Provider value={{toggleDrawer}}>
                <div>
                    <Notifier/>

                    <Header/>
                    <Toolbar/>

                    <NavDrawer open={isOpenDrawer}/>

                    <Container maxWidth="md" className={classes.content}>
                        {children}
                    </Container>
                </div>
            </Context.Provider>
        </div>
    )
}

function DefaultLayout({children}) {
    const classes = useStyles()

    return (
        <div>
            <Notifier/>

            <Container maxWidth="md" className={classes.content}>
                {children}
            </Container>
        </div>
    )
}

export default function App() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <ThemeProvider theme={responsiveFontSizes(customTheme)}>
            <BrowserRouter>
                <Switch>
                    <Route path='/app' render={({match: {path}}) => (
                        isAuthenticated ?
                            <AppLayout>
                                <Switch>
                                    <Route path={`${path}/bot_settings`} exact component={BotSettingsPage}/>
                                    <Route path={`${path}/command_settings`} exact component={CommandSettingsPage}/>
                                    <Route path={`${path}/keyboard_settings`} exact component={KeyboardSettingsPage}/>
                                    <Route path={`${path}/statistics`} exact component={StatisticsPage}/>
                                    <Redirect from={`${path}/*`} to='/'/>
                                </Switch>
                            </AppLayout>
                            :
                            <Redirect to='/'/>
                    )}/>

                    <Route exact>
                        <DefaultLayout>
                            <Switch>
                                <Route path='/' exact component={HomePage}/>
                                <Route path='/login' exact component={LoginPage}/>
                                <Redirect from='/*' to='/'/>
                            </Switch>
                        </DefaultLayout>
                    </Route>

                    <Redirect from='*' to='/'/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
