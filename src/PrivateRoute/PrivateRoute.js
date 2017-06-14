import React from 'react';
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({component: Component, authFunction, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authFunction() === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

PrivateRoute.propTypes = {component: PropTypes.any.isRequired, authFunction: PropTypes.func.isRequired};

export default PrivateRoute;