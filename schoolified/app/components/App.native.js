import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { configureStore } from '../../reducers/stores.native';
import { Login } from '../../features/authentication';
import { Main } from '../../features/main';
import { ClassList } from '../../features/class';
import { ScreenName } from '../../globals/constants';

const Stack = createStackNavigator();
export const { store, persistor } = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" hidden />
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName={ScreenName.Login}>
                <Stack.Screen
                  name={ScreenName.Login}
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ScreenName.Main}
                  component={Main}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ScreenName.ClassList}
                  component={ClassList}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
