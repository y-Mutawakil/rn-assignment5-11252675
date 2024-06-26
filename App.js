import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageOne from './components/ScreenOne';
import PageTwo from './components/ScreenTwo';
import { ThemeProvider, useTheme } from './components/ThemeHandler';
import { Image } from 'react-native';
import MyCardsPage from './components/MyCards';
import StatisticsPage from './components/Statistics';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, focused, theme) => {
  let iconImage;

  if (routeName === 'Home') {
    iconImage = focused ? require('./assets/home.png') : require('./assets/inactiveHome.png');
  } else if (routeName === 'Settings') {
    iconImage = focused ? require('./assets/settings.png') : require('./assets/inactiveSettings.png');
  }else if (routeName === 'My Cards') {
    iconImage = focused ? require('./assets/myCards.png') : require('./assets/inactiveMyCards.png');
  }else if (routeName === 'Statistics') {
    iconImage = focused ? require('./assets/statictic.png') : require('./assets/inactiveStatictics.png');
  }

  return <Image source={iconImage} style={{ width: 25, height: 25 }} />;
};

const MyTabs = () => {
  const { theme } = useTheme(); 

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused, theme),
      tabBarActiveTintColor: '#4169E1',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: theme === 'dark' ? '#333333' : '#f2f2f2',
      },
    })}
    tabBarOptions={{
      activeTintColor: theme === 'dark' ? 'white' : 'black', 
      inactiveTintColor: 'gray', 
    }}
    >
      <Tab.Screen name="Home" component={PageOne} options={{ headerShown: false }} />
      <Tab.Screen name="My Cards" component={MyCardsPage} options={{ headerShown: false }} />
      <Tab.Screen name="Statistics" component={StatisticsPage} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={PageTwo} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
