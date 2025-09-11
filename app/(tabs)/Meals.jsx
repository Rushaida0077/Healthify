import { useQuery } from 'convex/react';
import { FlatList, Text, View } from 'react-native';
import GenerateRecipeCard from '../../components/GenerateRecipeCard';
import RecipeCard from '../../components/RecipeCard';
import { api } from '../../convex/_generated/api';
export default function Meals() {
  const recipeList=useQuery(api.Recipes.GetAllRecipes);
  console.log("All Recipes:",recipeList);
  return (
    <FlatList
    data={[]}
    renderItem={()=>null}
    ListHeaderComponent={
    <View
      style={{
        padding: 20,
        paddingTop:50,
      }}>
      <Text style={{
        fontSize: 25,
        fontWeight: 'bold',
      }}>Discover Recipes</Text>
      <GenerateRecipeCard />
      <View>
        <FlatList
          data={recipeList}
          numColumns={2}
          renderItem={({item})=>(
            <RecipeCard recipe={item} />
          )}
        />
      </View>
    </View>}
    />
  )
}