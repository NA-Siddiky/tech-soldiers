import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Context } from '../Context/Context';
function PrivateRoute({ children, ...rest }) {
	const { user } = useContext(Context);
	const { isSignedIn } = user;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isSignedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
