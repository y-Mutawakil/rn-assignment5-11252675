import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
    { id: '1', title: 'Profile' },
    { id: '2', title: 'Language' },
    { id: '3', title: 'Contact Us ' },
    { id: '4', title: 'Privacy Policy' },
    { id: '5', title: 'Change Password' },
  ];
  
  const Item = ({ title, mode }) => (
    <TouchableOpacity style={{borderBottomWidth:0.75, borderBottomColor:"grey", padding:13, display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingLeft:0}}>
      <Text style={[{color: mode === 'dark' ? 'white' : 'black' }, {fontSize:15, fontWeight:"800"}]}>{title}</Text>
      <Text style={{fontSize:15, fontWeight:"light", color:"lightgrey"}}>❯</Text>
    </TouchableOpacity>
  );


export default function SettingsMenu({ mode }) {
  return (
    <>
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} mode={mode}/>}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            style={{marginTop:"17%"}}
        />
    </>
  );
}
