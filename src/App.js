import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppNavigator from './navigation/AppNavigator';
import { setTopLevelNavigator } from './utilities/NavigationService';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator
					ref={navigatorRef => setTopLevelNavigator(navigatorRef)}
				/>
			</Provider>
		);
	}
}
