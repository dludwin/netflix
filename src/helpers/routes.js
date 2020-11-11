import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// This is used in the App.js. If user is LoggedIn we redirect them to laggedInPath which is BROWSE
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={() => {
				if (!user) {
					return children; // component page of signin, basically <Signin />
				}

				if (user) {
					return <Redirect to={{ pathname: loggedInPath }} />;
				}
				return null;
			}}
		/>
	);
}

export function ProtectedRoute({ user, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (user) {
					return children; // if the user is logged-in return browse page
				}
				if (!user) {
					return (
						<Redirect to={{ pathname: 'singin', state: { from: location } }} />
					);
				}
				return null;
			}}
		/>
	);
}
