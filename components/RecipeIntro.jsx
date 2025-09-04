import { Fire03Icon, PlusSignSquareIcon, ServingFoodIcon, TimeQuarter02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../shared/Colors';

export default function RecipeIntro({recipeDetail}) {
   const RecipeJson=recipeDetail?.jsonData;
  return (
    <View >
    <Image source={{uri:recipeDetail?.imageURL}} 
    style={{
      width:"100%",
      height:200,
      borderRadius:15
    }}/>
    <View style={{
      marginTop:15,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    }}>

      <Text style={{
        fontSize:25,
        fontWeight:"bold",
        marginTop:10,
       
      }}>{recipeDetail?.recipeName}</Text>
      <HugeiconsIcon icon={PlusSignSquareIcon} 
        size={40}
        color={Colors.PRIMARY}
      />

    </View>

    <Text style={{
      marginTop:6,
      fontSize:16,
      color:Colors.GRAY,
      lineHeight:25
    }}>{RecipeJson?.description}</Text>

    <View style={{
      marginTop:15,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      gap:10
      }}>

      <View style={styles.propertyContainer} >
      <HugeiconsIcon icon={Fire03Icon} color={Colors.PRIMARY}
      size={27}/>
      <Text style={styles.subText}>Calories</Text>
      <Text style={styles.counts}>{RecipeJson?.calories}</Text>
      </View>

      {/*<View style={styles.propertyContainer} >
      <HugeiconsIcon icon={Dumbbell01Icon} color={Colors.PRIMARY}
      size={27}/>
      <Text style={styles.subText}>Protiens</Text>
      <Text style={styles.counts}>{RecipeJson?.protiens}</Text>
      </View>*/}

      <View style={styles.propertyContainer} >
      <HugeiconsIcon icon={TimeQuarter02Icon}  color={Colors.PRIMARY}
      size={27}/>
      <Text style={styles.subText}>Time</Text>
      <Text style={styles.counts}>{RecipeJson?.cookTime} min</Text>
      </View>

      <View style={styles.propertyContainer} >
      <HugeiconsIcon icon={ServingFoodIcon} color={Colors.PRIMARY}
      size={27}/>
      <Text style={styles.subText}>Serve</Text>
      <Text style={styles.counts}>{RecipeJson?.serveTo}</Text>
      </View>

    </View>

    </View>
  );
}
const styles = StyleSheet.create({
  subText:{
    fontSize:17,
  },
  propertyContainer:{
    display:"flex",
    alignItems:"center",
    backgroundColor:Colors.SECONDARY,
    borderRadius:10,
    padding:10,
    flex:1
  },
  counts:{
    frontSize:25,
    fontWeight:"Bold",
    color:Colors.PRIMARY,
  }
  

  
});