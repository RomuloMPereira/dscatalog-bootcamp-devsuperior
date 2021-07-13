import { isAllowedByRole, isAuthenticated, Role } from 'core/utils/auth';
import React from 'react';
import { Redirect, Route } from 'react-router';

type Props = {
    children: React.ReactNode;
    path: string;
    allowedRoles?: Role[];
}

const PrivateRoute = ({ children, path, allowedRoles }: Props) => {
    return (
        <Route
            path={path}
            render={({ location }) => {
                if (!isAuthenticated()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/admin/auth/login",
                                state: { from: location }
                            }}
                        />
                    )
                } else if (isAuthenticated() && !isAllowedByRole(allowedRoles)) {
                    return (
                        <Redirect to={{ pathname: "/admin" }} />
                    )
                }
                return children;
            }}
        />
    );
}

export default PrivateRoute;