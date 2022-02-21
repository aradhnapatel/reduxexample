import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BookScreen} from '../component/book/BookScreen';
import {CartScreen} from '../component/cart/CartScreen';
import {ShoppingCartIcon} from '../component/shopping/ShoppingCartIcon';

const Stack = createStackNavigator();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Book"
          component={BookScreen}
          options={{headerRight: props => <ShoppingCartIcon {...props} />}}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
