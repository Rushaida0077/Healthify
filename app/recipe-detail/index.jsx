import { useQuery } from 'convex/react';
import { useLocalSearchParams } from 'expo-router';
import { useRef } from 'react';
import { FlatList, Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import AddToMealActionSheet from '../../components/AddToMealActionSheet';
import RecipeIngredients from '../../components/RecipeIngredients';
import RecipeSteps from '../../components/RecipeSteps';
import { api } from '../../convex/_generated/api';
import Colors from '../../shared/Colors';
import RecipeIntro from './../../components/RecipeIntro';
import Button from './../../components/shared/Button';

export default function RecipeDetail() {
  const { recipeId } = useLocalSearchParams();
  const actionSheetRef = useRef(null);

  const recipeDetail = useQuery(
    api.Recipes.GetRecipeById,
    recipeId ? { id: recipeId } : null
  );

  if (!recipeDetail) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={
          <View style={{ padding: 20, paddingTop: 30 }}>
            <RecipeIntro recipeDetail={recipeDetail} />
            <RecipeIngredients recipeDetail={recipeDetail} />
            <RecipeSteps recipeDetail={recipeDetail} />

            <View style={{ marginTop: 15 }}>
              <Button
                title="Add to Meal Plan"
                onPress={() => actionSheetRef.current?.show()}
              />
            </View>
          </View>
        }
      />

      <ActionSheet ref={actionSheetRef}>
        <AddToMealActionSheet
          recipeDetail={recipeDetail}
          hideActionSheet={() => actionSheetRef.current?.hide()}
        />
      </ActionSheet>
    </View>
  );
}
