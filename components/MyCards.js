// PageOne.js
import React from 'react';
import { View, Text,  ScrollView, SafeAreaView } from 'react-native';
import { useTheme } from './ThemeHandler'; // Adjust the import path based on your directory structure

export default function MyCardsPage() {
  const { theme } = useTheme(); // Retrieve theme from context

  return (
    <ScrollView style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <SafeAreaView>
        <View style={theme === 'dark' ? { backgroundColor: 'black', padding: 20, paddingTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center',  } : { backgroundColor: 'white', padding: 20, paddingTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <Text style={{ color: theme === 'dark' ? 'white' : 'black', fontSize: 23, fontWeight: 'bold', marginTop: '10%' }}>My Cards</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
