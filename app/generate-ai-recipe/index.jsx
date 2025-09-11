import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import RecipeOptionList from "../../components/RecipeOptionList";
import Button from '../../components/shared/Button';
import { GenerateAIRecipes } from '../../services/AiModel';
import Prompt from '../../shared/Prompt';
import Colors from './../../shared/Colors';


export default function GenerateAIRecipe() {

    const [input,setInput] = useState();
    const [loading, setLoading] = useState(false);
    const [recipeOption, setRecipeOption] = useState([]);

    const GenerateRecipeOptions = async () => {
  setLoading(true);
  try {
    const PROMPT = input + Prompt.GENERATE_RECIPE_OPTION_PROMPT;
    const result = await GenerateAIRecipes(PROMPT);

    // log and parse the response
    console.log(result.choices[0].message);
    const extractJson = (result.choices[0].message.content)
      .replace(/```json/g, '')
      .replace(/```/g, '');
    const parsedJSONResp = JSON.parse(extractJson);
    console.log(parsedJSONResp);
    setRecipeOption(parsedJSONResp); // ✅ reset previous options


    setRecipeOption(parsedJSONResp); // ✅ store parsed recipe options
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false); // ✅ always reset loading, success or error
  }
};

  
    return (
    <View style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: '100%',
        }}>
      <Text style={{
        marginTop:50,
        fontSize: 30,
        fontWeight: 'bold',
      }}>AI Recipe Generator</Text>
      <Text style={{
        marginTop: 5,
        color: Colors.GRAY,
        fontSize: 16
      }}>Generate personalized recipes based on your preferences and dietary needs.</Text>

      <TextInput 
        style={styles.textArea}
        onChangeText={(value) => setInput(value)}
        placeholder='Enter your ingredients or recipe name' />
       <View style={{
        marginTop: 15,
       }}>
        <Button title={'Generate Recipe'}
        onPress={GenerateRecipeOptions}
        loading={loading}
        />
     </View>
     {recipeOption?.length >0 &&<RecipeOptionList  recipeOption={recipeOption}/>}
    </View>
  );
}

const styles=StyleSheet.create({
    textArea: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        marginTop: 15,
        height: 150,
        textAlignVertical: 'top',
        backgroundColor: Colors.WHITE,
        borderColor: Colors.GRAY
          
    }
    }); 