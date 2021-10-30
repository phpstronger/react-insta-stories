import React from 'react';

export const initialContext = {
	defaultInterval: 4000,
	width: 360,
	height: 640,
};

const GlobalContext = React.createContext(initialContext);

export default GlobalContext;
