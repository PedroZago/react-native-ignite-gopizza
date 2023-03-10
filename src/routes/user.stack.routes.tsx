import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '@src/hooks/auth';

import { Product, Home, Order, Orders } from '@screens/index';

import { UserTabRoutes } from './user.tab.routes';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const UserStackRoutes = () => {
  const { user } = useAuth();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user?.isAdmin ? (
        <Group>
          <Screen name="home" component={Home} />

          <Screen name="product" component={Product} />
        </Group>
      ) : (
        <Group>
          <Screen name="userTabRoutes" component={UserTabRoutes} />

          <Screen name="order" component={Order} />
        </Group>
      )}
    </Navigator>
  );
};
