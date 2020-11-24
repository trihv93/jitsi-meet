import React from 'react';
// import {StatusBar} from 'react-native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from '../../reducers/stores';
import { Login } from '../../features/authentication'

// const Stack = createStackNavigator();
export const { store, persistor } = configureStore();

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Login/>
                </PersistGate>
            </Provider>
        );
    }
}
