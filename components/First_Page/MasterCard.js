import { View, Text, Image } from "react-native";

export default function MasterCard() {
  return (
    <View style={{marginTop:10, display:"flex", backgroundColor:"#24243c", borderRadius:20}}>
        <View style={{display:"flex", flexDirection:"row", padding:15, justifyContent:"space-between", paddingVertical:20}}>
            <Image source={require("../../assets/chip.png")} style={{height:25, width:38}} />
            <Image source={require("../../assets/signal.png")} style={{height:25, width:30}} />
        </View>
        <View style={{display:"flex", flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{color:"white", fontSize:23}}>4562</Text>
            <Text style={{color:"white", fontSize:23}}>1122</Text>
            <Text style={{color:"white", fontSize:23}}>4595</Text>
            <Text style={{color:"white", fontSize:23}}>7852</Text>
        </View>
        <Text style={{color:"white", padding:5, paddingLeft:20}}>AR Jonson</Text>
        <View style={{display:"flex", flexDirection:"row", padding:10, justifyContent:"space-between"}}>
            <View style={{display:"flex", flexDirection:"column", padding:10, justifyContent:"space-between"}}>
                <Text style={{color:"white", paddingBottom:5, opacity:0.5, fontSize:11}}>Expiry Date</Text>
                <Text style={{color:"white"}}>24/2000</Text>
            </View>
            <View style={{display:"flex", flexDirection:"column", padding:10, justifyContent:"space-between"}}>
                <Text style={{color:"white", paddingBottom:5, opacity:0.5, fontSize:11}}>CVV</Text>
                <Text style={{color:"white"}}>6986</Text>
            </View>
            <View style={{display:"flex", flexDirection:"column", padding:10, justifyContent:"space-between"}}>
                <Image source={require("../../assets/mastercard.png")} style={{width:60, height:35}}/>
                <Text style={{color:"white"}}>Mastercard</Text>
            </View>
        </View>
    </View>
  );
}

