import { RouteObject } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute';


export const ACCOUNT_BASE_ROUTES ={
    index:'/account',
    order:'/account/order'
}
export const accountRoutes:RouteObject[] = [ {
        path:ACCOUNT_BASE_ROUTES.index,
        element:<PrivateRoute route={<div>Account</div>} shouldBeLoggedIn={true}/>,
        children:[
            {
                path:ACCOUNT_BASE_ROUTES.order,
                element:<div>order</div>
            }
        ]
    }]