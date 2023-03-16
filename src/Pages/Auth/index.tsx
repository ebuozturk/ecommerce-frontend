import {RouteObject} from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute';
import Auth from './Auth';

export const AUTH_BASE_ROUTES = {
    index:'/auth',
    login:'/login',
    register:'/register'
}
export const authRoutes:RouteObject[] = [{
    path:AUTH_BASE_ROUTES.index,
    children:[
        {path:AUTH_BASE_ROUTES.index, element: <PrivateRoute route = {<Auth/>} shouldBeLoggedIn={false} />, index:true},
    ]
}]