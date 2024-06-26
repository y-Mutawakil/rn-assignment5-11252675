// PageOne.js
import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useTheme } from './ThemeHandler'; 

export default function StatisticsPage() {
  const { theme } = useTheme(); 

  return (
    <ScrollView style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <SafeAreaView>
        <View style={theme === 'dark' ? { backgroundColor: 'black', padding: 20, paddingTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center',  } : { backgroundColor: 'white', padding: 20, paddingTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <Text style={{ color: theme === 'dark' ? 'white' : 'black', fontSize: 23, textAlign: 'center', fontWeight: 'bold', marginTop: '10%' }}>Statistics</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
