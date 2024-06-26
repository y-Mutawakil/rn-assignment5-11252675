import React, { useState, useEffect } from 'react';
import { View, Text, Switch } from 'react-native';

export default function ThemeToggler({ mode, toggler }) {
  const [currentTheme, setCurrentTheme] = useState(mode === 'dark');

  useEffect(() => {
    setCurrentTheme(mode === 'dark');
  }, [mode]);

  const toggleSwitch = () => {
    const newTheme = !currentTheme ? 'dark' : 'light'; 
    setCurrentTheme(newTheme === 'dark'); 

    toggler(newTheme);
  };

  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10%' }}>
      <Text style={[mode === 'dark' ? { color: 'white' } : { color: 'black' }, { fontSize: 20, fontWeight: '800' }]}>Theme</Text>
      <Switch
        trackColor={{ false: 'grey', true: 'lightgreen' }}
        thumbColor={'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={currentTheme}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} 
      />
    </View>
  );
}
