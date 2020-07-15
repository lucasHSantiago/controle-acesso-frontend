import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
    let type;

    switch(props.type) {
        case 'user':  type = 'user-token'; break;
        case 'admin': type = 'admin-token'; break;
    }
    const isLogged = !!localStorage.getItem(type);
    
    return isLogged ? <Route {...props} /> :  <Redirect to="/" />;
}

export default PrivateRoute;