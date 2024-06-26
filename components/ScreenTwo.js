import React from 'react';
import { View, Text } from 'react-native';
import SettingsMenu from './SecondPage/SettingsMenu';
import ThemeToggler from './SecondPage/ThemeToggler';
import { useTheme } from './ThemeHandler';

export default function PageTwo({ navigation }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', padding: 20, paddingTop: 30, height: '100%' }}>
      <Text style={{ color: theme === 'dark' ? 'white' : 'black', fontSize: 23, textAlign: 'center', fontWeight: 'bold', marginTop: '10%' }}>Settings</Text>
      <SettingsMenu mode={theme} />
      <ThemeToggler mode={theme} toggler={toggleTheme} />
    </View>
  );
}
