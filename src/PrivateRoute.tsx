
import React from 'react'
import { Navigate } from 'react-router-dom';
import { useStateContext } from './StateContext';
import Auth from './Pages/Auth/Auth';


const PrivateRoute = (props:any) => {

    const { route,shouldBeLoggedIn } = props;

    const {isLoggedIn} = useStateContext();
    
if(isLoggedIn === !shouldBeLoggedIn){
    return !shouldBeLoggedIn ? <Navigate
            to='/'
            /> : <Auth/>;
}
  return route;
}
export default PrivateRoute;
