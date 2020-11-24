import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from '../../reducers/stores';
import { Login } from '../../features/authentication'
import { Main } from '../../features/main'

const Stack = createStackNavigator();
export const { store, persistor } = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaProvider>
                        <NavigationContainer>
                            <Stack.Navigator initialRouteName="Login">
                                <Stack.Screen
                                    name="Login"
                                    component={Login}
                                    options={{headerShown: false}}
                                />
                                <Stack.Screen
                                    name="Main"
                                    component={Main}
                                    options={{headerShown: false}}
                                />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
