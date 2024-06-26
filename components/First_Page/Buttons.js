import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../ThemeHandler';

export default function ActionButtonSection() {
  const { theme } = useTheme();

  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity style={{display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: theme === 'dark' ? '#72777B' : '#EAF3FA', width: 30, height: 30, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30}}>
            <Image source={theme === 'dark' ? require('../../assets/arrowLight.png') : require('../../assets/arrow.png')} style={{width: 25, height: 30}}/>
          </View>
          <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>Sent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', gap:15, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: theme === 'dark' ? '#72777B' : '#EAF3FA', width: 30, height: 30, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30}}>
            <Image source={theme === 'dark' ? require('../../assets/arrowLight.png') : require('../../assets/arrow.png')} style={[{width: 25, height: 30}, {transform: [{rotate: '180deg'}]}]} />
          </View>
          <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: theme === 'dark' ? '#72777B' : '#EAF3FA', width: 30, height: 30, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30}}>
            <Image source={theme === 'dark' ? require('../../assets/loanLight.png') : require('../../assets/loan.png')} style={{width: 50, height: 50}}/>
          </View>
          <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>Loan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: theme === 'dark' ? '#72777B' : '#EAF3FA', width: 30, height: 30, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30}}>
            <Image source={theme === 'dark' ? require('../../assets/topupLight.png') : require('../../assets/topup.png')} style={{width: 50, height: 50}}/>
          </View>
          <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>Topup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

