import { Route } from 'react-router-dom'
import PrivateRoute from './CustomRoutes/PrivateRoute'
import PublicRoute from './CustomRoutes/PublicRoute'
import * as paths from '../constants/routerConstants'
import SignInLayout from './../components/Layouts/SignInLayout'
import ClaimLayout from './../components/Layouts/ClaimLayout'

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
        path: paths.HomePath,
        route: Route,
        componentProps: { routes: [] },
        exact: true,
    },
    {
        name: 'AuthView',
        path: paths.LoginInPath,
        route: PublicRoute,
        componentProps: {
            auth: 'login',
            routes: [],
        },
        layout: SignInLayout,
    },
    {
        name: 'AuthView',
        path: paths.SignInPath,
        route: PublicRoute,
        componentProps: {
            auth: 'signin',
            routes: [],
        },
        layout: SignInLayout,
    },
    {
        name: 'ClaimView',
        path: paths.ClaimPath,
        route: PrivateRoute,
        componentProps: {
            routes: [],
        },
        layout: ClaimLayout,
    },
    // {
    //     name: 'TripvixiaIFrame',
    //     path: paths.TravelPath,
    //     layout: SignInLayout,
    //     route: Route,
    // },
    {
        name: 'Error404View',
        route: Route,
    },
]

export default routes
