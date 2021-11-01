import { Route } from 'react-router-dom'
// import PrivateRoute from "./CustomRoutes/PrivateRoute"
// import PublicRoute from './CustomRoutes/PublicRoute'
import { HomePath, SignInPath, LoginInPath } from '../constants/routerConstants'
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
        route: Route,
        componentProps: { routes: [] },
        exact: true,
    },
    {
        name: 'AuthView',
        path: LoginInPath,
        route: Route,
        componentProps: {
            auth: 'login',
            routes: [],
        },
        layout: SignInLayout,
    },
    {
        name: 'AuthView',
        path: SignInPath,
        route: Route,
        componentProps: {
            auth: 'signin',
            routes: [],
        },
        layout: SignInLayout,
    },
    {
        name: 'Error404View',
        route: Route,
    },
]

export default routes
