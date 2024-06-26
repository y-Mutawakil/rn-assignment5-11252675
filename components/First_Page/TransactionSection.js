import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '../ThemeHandler';

const transactions = [
  { key: 1, name: 'Apple Store', category: 'Entertainment', price: '- $5.99' },
  { key: 2, name: 'Money Transfer', category: 'Transaction', price: '- $12.00' },
  { key: 3, name: 'Grocery', category: 'Purchase', price: '$300.00' },
  { key: 4, name: 'Spotify', category: 'Music', price: '- $88.00' }
];

const getImage = (itemName, theme) => {
  switch (itemName.toLowerCase()) {
    case 'apple store':
      return theme === 'dark' ? require('../../assets/appleLight.png') : require('../../assets/apple.png');
    case 'spotify':
      return require('../../assets/spotify.png');
    case 'grocery':
      return require('../../assets/grocery.png');
    case 'money transfer':
      return theme === 'dark' ? require('../../assets/moneyLight.png') : require('../../assets/money.png');
    default:
      return require('../../assets/apple.png');
  }
}

export default function TransactionSection() {
  const { theme } = useTheme();

  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: theme === 'dark' ? 'white' : 'black'}}>Transaction</Text>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>Sell all</Text>
      </View>
      <View>
        {transactions.map((transaction) => {
          return (
            <View key={transaction.key} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
              <View style={{backgroundColor: theme === 'dark' ? '#72777B' : '#EAF3FA', width: 30, height: 30, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30}}>
                <Image source={getImage(transaction.name, theme)} style={{width: 30, height: 30}}/>
              </View>
              <View style={{marginLeft: '-30%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '30%', gap: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, width: '150%', color: theme === 'dark' ? 'white' : 'black'}}>{transaction.name}</Text>
                <Text style={{opacity: 0.5, fontSize: 13, width: '150%', color: theme === 'dark' ? 'white' : 'black'}}>{transaction.category}</Text>
              </View>
              <View>
                <Text style={parseFloat(transaction.price.replace('$', '')) > 0 ? {color: 'blue'} : (theme === 'dark' ? {color: 'white'} : {color: 'black'})}>{transaction.price}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
