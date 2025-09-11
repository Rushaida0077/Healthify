import { CheckmarkSquare02Icon, SquareIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useMutation } from 'convex/react';
import { useContext } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RefreshDataContext } from '../context/RefreshDataContext';
import { api } from '../convex/_generated/api';
import Colors from '../shared/Colors';

export default function MealPlanCard({MealPlanInfo}) {
  const UpdateStatus=useMutation(api.MealPlan.UpdateStatus);
  const {refreshData,setRefreshData}=useContext(RefreshDataContext);
  const onCheck=async(status)=>{
    const result=await UpdateStatus({
      mealPlanId:MealPlanInfo?._id,
      status:status,
      calories:MealPlanInfo?.recipe?.jsonData?.calories 
    });
    Alert.alert("Status Updated");
    setRefreshData(Date.now());
  }
  return (
    <View style={{
        padding:10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:10,

    }}>
      <Image source={{ uri: MealPlanInfo?.recipe?.imageURL }} 
       style={{ width: 70, height: 70, borderRadius: 15 }} />
<View style={{
  display:'flex',
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
}}>
      <View>
       <Text style={styles.mealTypeText}> {MealPlanInfo?.mealType}</Text>
       <Text style={styles.recipeNameText}>{MealPlanInfo?.recipe?.recipeName}</Text>
       <Text style={styles.caloriesText}>{MealPlanInfo?.recipe?.jsonData?.calories} kcal</Text>

      </View>
      <View>
        {MealPlanInfo?.status != true?
        <TouchableOpacity onPress={() =>  onCheck(true) }>
        <HugeiconsIcon icon={SquareIcon} color={Colors.GRAY} />
        </TouchableOpacity>
        :<TouchableOpacity onPress={() => onCheck(false) }>
        <HugeiconsIcon icon={CheckmarkSquare02Icon} color={Colors.GREEN}/>
        </TouchableOpacity>
        }
      </View>
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
        borderRadius:99,
        flexWrap:'wrap',
        alignSelf:'flex-start',
    },
    recipeNameText: {
    fontSize: 17,
    fontWeight: 'bold',
    flexShrink: 1,         
    flexWrap: 'wrap',      
    maxWidth: 200,        
    marginTop: 5
  },

    caloriesText:{
        fontSize:16,
        fontWeight:'500',
        color:Colors.GREEN,
        marginTop:5,
    }

})
