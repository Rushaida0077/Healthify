import { useMutation } from 'convex/react';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { UserContext } from '../context/UserContext';
import { api } from '../convex/_generated/api';
import { GenerateAIRecipes, GenerateRecipeImage } from '../services/AiModel';
import Colors from '../shared/Colors';
import Prompt from '../shared/Prompt';
import LoadingDialog from './LoadingDialog';


export default function RecipeOptionList({ recipeOption }) {

  const [loading, setLoading] = useState(false);
  const CreateRecipes = useMutation(api.Recipes.CreateRecipes);
  const { user } = useContext(UserContext);
  const router = useRouter();
    const onRecipeOptionSelect = async (recipe) => {
  if (loading) return;
  setLoading(true);

  const PROMPT = "RecipeName: " + recipe?.recipeName +
    "Description: " + recipe?.description + Prompt.GENERATE_COMPLETE_RECIPE_PROMPT; 

  try {
    const result = await GenerateAIRecipes(PROMPT);
    const extractJson = (result.choices[0].message.content)
      .replace(/```json/g, '')
      .replace(/```/g, '');
    const parsedJSONResp = JSON.parse(extractJson);
    console.log("AI Recipe JSON:", parsedJSONResp);

    const imageUrl = await GenerateRecipeImage(parsedJSONResp?.imagePrompt) 
console.log(imageUrl?.data?.image);

// Save in database
const saveRecipeResult = await CreateRecipes({
  jsonData: parsedJSONResp,
  imageURL: imageUrl?.data?.image, // fallback empty string if generation fails
  recipeName: recipe?.recipeName,
  userId:  user._id
});
    console.log("Recipe saved:", saveRecipeResult);
   router.push({
  pathname: '/recipe-detail',
  params:{ recipeId: saveRecipeResult}
});

  } catch (e) {
    console.error("AI Recipe generation failed:", e.message || e);
  } finally {
    setLoading(false);
  }
};
  return (
    <View style={{
      padding: 20,
      }}>
    <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
    }}>Select Recipe</Text>

    <View>
   {recipeOption?.map((item, index) => (
    <TouchableOpacity
    onPress={() => onRecipeOptionSelect(item)}
     key={index}  style={{
        marginTop: 15,
        padding: 15,
        borderWidth:0.2,
        borderRadius:15
        }}>
    <Text style={{
        fontSize: 16,
        fontWeight: 'bold'
    }}>{item?.recipeName}</Text>

    <Text style={{        
          color: Colors.GRAY,
    }}>{item?.description}</Text>

    </TouchableOpacity>

   ))}
      </View>
      <LoadingDialog loading={loading} />
    </View>
  );
} 