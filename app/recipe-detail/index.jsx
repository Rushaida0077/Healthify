import { useQuery } from 'convex/react';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { FlatList } from 'react-native-web';
import RecipeIngredients from '../../components/RecipeIngredients';
import { api } from '../../convex/_generated/api';
import Colors from '../../shared/Colors';
import RecipeIntro from './../../components/RecipeIntro';
import RecipeSteps from '../../components/RecipeSteps';


export default function RecipeDetail() {
     const {recipeId}=useLocalSearchParams();
        console.log(recipeId);

        
         const recipeDetail = useQuery(
    api.Recipes.GetRecipeById,{
      id: recipeId===undefined&&"jh750rqz5gmnhb26m4sze31tjs7pv5cc"
    }
  );

  console.log("Recipe Detail:", recipeDetail);


        //const GetRecipeDetails=async()=>{
        //}
   
  return (
    <FlatList
    data={[]}
    renderItem={()=>null}
    ListHeaderComponent={
    
    <View style={{
          backgroundColor:Colors.WHITE,
          padding: 20,
          paddingTop: 30,
          height:"100%"
         
        }}>
      <RecipeIntro recipeDetail={recipeDetail} />
      <RecipeIngredients recipeDetail={recipeDetail}  />
      <RecipeSteps recipeDetail={recipeDetail} />
    </View>
    
    }
    ></FlatList>
  );
}