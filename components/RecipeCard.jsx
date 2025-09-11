import { Clock01FreeIcons, Fire02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../shared/Colors';

export default function RecipeCard({recipe}) {
   const recipeJson=recipe?.jsonData; 
  return (
  <Link 
      href={`/recipe-detail?recipeId=${recipe?._id}`}  
      asChild
    >
    <TouchableOpacity style={{ flex: 1, margin: 5 }}>
    <View>
      <Image source={{ uri: recipe?.imageURL }}
      style={{ width: '100%',
       height: 140,
         borderTopLeftRadius:15,
        borderTopRightRadius:15,
         marginTop:10 }}

      />
      <View style={{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
       
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',}}>{recipe?.recipeName}</Text>
          <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            flexShrink: 1,
            marginTop:5,
            gap:5
            
            }}>
            <View style={styles.infoContainer}>
                <HugeiconsIcon icon={Fire02Icon} color={Colors.RED} size={18}/>
                <Text style={{
                    fontSize:14.5,
                    color:Colors.GRAY,
                }}>{recipeJson?.calories} kCal</Text>
            </View>
                <View style={styles.infoContainer}>
                <HugeiconsIcon icon={Clock01FreeIcons} color={Colors.GREEN} size={18}/>
                <Text style={{
                    fontSize:14.5,
                    color:Colors.GRAY,
                }}>{recipeJson?.cookTime} Min</Text>
            </View>
        </View>
      </View>

    </View>
    </TouchableOpacity>
    </Link>
  )
}
const styles = StyleSheet.create({
    infoContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexShrink: 1,
        
    }

});