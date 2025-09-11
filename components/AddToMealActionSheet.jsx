import { Coffee02Icon, Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useMutation } from 'convex/react';
import { useContext, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { UserContext } from '../context/UserContext';
import { api } from '../convex/_generated/api';
import Colors from '../shared/Colors';
import DateSelection from './DateSelection';
import Button from './shared/Button';


export default function AddToMealActionSheet({ recipeDetail, hideActionSheet }) {
  const [dateList, setDateList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const CreateMealPlan=useMutation(api.MealPlan.CreateMealPlan);
  const {user}=useContext(UserContext);

  const mealOptions = [
    { title: 'Breakfast', icon: Coffee02Icon },
    { title: 'Lunch', icon: Sun03Icon },
    { title: 'Dinner', icon: Moon02Icon },
  ];


  const AddToMealPlan = async() => {
    if (!selectedDate && !selectedMeal) {
      alert('Please select both date and meal type.');
      return;
    }
    const result=await CreateMealPlan({
      recipeId:recipeDetail?._id,
      date:selectedDate,
      mealType:selectedMeal,
      userId: user?._id
    });
    console.log("Meal Plan added:",result);
    Alert.alert('Success', 'Recipe added to your meal plan!');
    hideActionSheet();
  
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Add to Meal
      </Text>

      {/* Select Date */}
     <DateSelection setSelectedDate={setSelectedDate}/>

      {/* Select Meal */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
        Select Meal
      </Text>
      <FlatList
        data={mealOptions}
        numColumns={3}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedMeal(item.title)}
            style={{
              flex: 1,
              alignItems: 'center',
              padding: 12,
              borderWidth: 2,
              borderRadius: 12,
              margin: 5,
              backgroundColor:
                selectedMeal === item.title ? Colors.SECONDARY : Colors.WHITE,
              borderColor:
                selectedMeal === item.title ? Colors.PRIMARY : Colors.GRAY,
            }}
          >
            <HugeiconsIcon icon={item.icon} size={24} color={Colors.PRIMARY} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 5,
                color:
                  selectedMeal === item.title ? Colors.PRIMARY : Colors.GRAY,
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginTop: 15}}>
        <Button title={'+ Add to Meal plan'} onPress={AddToMealPlan}/>
        <TouchableOpacity 
        onPress={hideActionSheet}
        style={{padding:10,}}>
        <Text style={{
          fontSize:20,
          textAlign:'center'}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
