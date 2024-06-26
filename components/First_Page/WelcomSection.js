import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '../ThemeHandler';

export default function WelcomeSection() {
  const { theme } = useTheme();

  return (
    <View style={{display: 'flex', flexDirection: 'row', width: '100%', padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
        <Image source={require('../../assets/profilePic.png')} style={{borderRadius: 50}}/>
      </View>
      <View style={{marginLeft: '-20%'}}>
        <View>
          <Text style={{paddingBottom: 10, opacity: 0.5, color: theme === 'dark' ? 'white' : 'black'}}>Welcome Back</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: theme === 'dark' ? 'white' : 'black'}}>Eric Atsu</Text>
        </View>
      </View>
      <View style={{padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme === 'dark' ? '#72777B' : '#EAF3FA', borderRadius: 50}}>
        <Image source={theme === 'dark' ? require('../../assets/searchLight.png') : require('../../assets/search.png')} style={{borderRadius: 50, width: 20, height: 20}}/>
      </View>
    </View>
  );
}
