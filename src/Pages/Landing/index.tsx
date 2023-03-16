import { RouteObject } from 'react-router-dom';
import Landing from './Landing';

export const LANDING_BASE_ROUTES ={
    index:'/'
}
export const landingRoutes:RouteObject[] = [{
    path:LANDING_BASE_ROUTES.index,
    element: <Landing/>,
    index:true
    }
]