import { Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function RecipeSteps(recipeDetail) {
     const steps = recipeDetail?.jsonData?.steps;
  return (
    <View style={{
        marginTop:15,
    }}>
      <Text>RecipeSteps</Text>
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
            borderWidth:0.3,
            corderRadius:15,
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
            fontSize:18,
            flex:1,
            flexShrink:1,
        }}>{item}</Text>
        </View>
      )}
    />
    </View>
  )
}