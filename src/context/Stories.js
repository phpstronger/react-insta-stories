import React from 'react';

export const initialContext = {
	stories: [],
};

const StoriesContext = React.createContext(
	initialContext
);

export default StoriesContext;
