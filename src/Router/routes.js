import { Route } from 'react-router-dom'
// import PrivateRoute from "./CustomRoutes/PrivateRoute"
import PublicRoute from './CustomRoutes/PublicRoute'
import { HomePath, SignInPath } from '../constants/routerConstants'
import SignInLayout from './../components/Layouts/SignInLayout'

const routes = [
    // {
    //     name: 'Example',
    //     path: 'login',
    //     component: Login,
    //     auth: false,
    //     route: PublicRoute,
    //     routes: []
    //     layout: NoAuthLayout
    // },
    {
        name: 'LandingPage',
        path: HomePath,
        route: PublicRoute,
        exact: true,
        componentProps: { routes: [] },
    },
    {
        name: 'SigninView',
        path: SignInPath,
        route: PublicRoute,
        // exact: true,
        componentProps: { routes: [] },
        layout: SignInLayout,
    },
    {
        name: 'Error404View',
        route: Route,
    },
]

export default routes
