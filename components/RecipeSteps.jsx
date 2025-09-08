import { FlatList, Text, View } from 'react-native';
import Colors from '../shared/Colors';

export default function RecipeSteps({recipeDetail}) {
     const steps = recipeDetail?.jsonData?.steps;
  return (
    <View style={{
        marginTop:15,
        marginBottom:20,
    }}>
     <Text style={{ 
      fontSize: 20, 
      fontWeight: "bold", 
      marginBottom: 10 }}>
      Recipe Steps</Text>
    <FlatList
      data={steps}
      renderItem={({item,index})=>(
        <View style={{
          marginTop:5,
          padding:10,
          display:"flex",
          flexDirection:"row",
            gap:10,
            alignItems:"center",
            borderWidth:0.5,
            borderRadius:15,
            borderColor:Colors.GRAY,
          }}>
        <Text style={{
            fontSize:18,
            backgroundColor:Colors.PRIMARY,
            padding:10,
            borderRadius:99,
            paddingHorizontal:15,
            color:Colors.WHITE,
        }}>{index +1}</Text>
        <Text style={{
            fontSize:16,
            flex:1,
            flexShrink:1,
        }}>{item}</Text>
        </View>
      )}
    />
    </View>
  )
}