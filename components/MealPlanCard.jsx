import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../shared/Colors'

export default function MealPlanCard({MealPlanInfo}) {
  return (
    <View style={{
        padding:10,
        display:'flex',
        flexDirection:'row',
        gap:10

    }}>
      <Image source={{ uri: MealPlanInfo?.recipe?.imageURL }} 
       style={{ width: 70, height: 70, borderRadius: 15 }} />

      <View>
       <Text style={styles.mealTypeText}>
            {MealPlanInfo?.mealType}
       </Text>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mealTypeText:{
        backgroundColor:Colors.SECONDARY,
        color:Colors.PRIMARY,
        padding:1,
        paddingHorizontal:10,
        borderRadius:99
    }

})
