import { createContext, useState } from 'react';

export const Context = createContext();

export const ServiceProvider = (props) => {
	const [user, setUser] = useState({});

	const contextData = {
		user,
		setUser,
	};
	return (
		<Context.Provider value={contextData}>
			{props.children}
		</Context.Provider>
	);
};
