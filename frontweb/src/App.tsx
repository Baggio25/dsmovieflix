import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext, AuthContextData } from './AuthContext';

import './assets/styles/custom.scss';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';

const App = () => {
	const [authContextData, setAuthContextData] = useState<AuthContextData>({
		authenticated: false,
	});

	return (
		<AuthContext.Provider value={{ authContextData, setAuthContextData }}>
			<Routes />
			<ToastContainer />
		</AuthContext.Provider>
	);
};

export default App;
