import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import RecipeIntro from './../../components/RecipeIntro';

export default function RecipeDetail() {
     const {recipeId}=useLocalSearchParams();
        console.log(recipeId);
        
  return (
    <View>
      <RecipeIntro />
    </View>
  );
}