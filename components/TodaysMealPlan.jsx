import { CalendarAdd01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import Colors from "../shared/Colors";
import Button from './shared/Button'; // Assuming you have a Button component



export default function TodaysMealPlan() {
  const[mealPlan, setMealPlan] = useState();
  return (
    <View style={{
      margin:15,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>Today's Meal Plan</Text>

      {!mealPlan&&
      <View style={{
        display: 'flex',
        alignItems: 'center',
        padding: 20,
      }}>
      <HugeiconsIcon icon={CalendarAdd01Icon} size={40} color={Colors.PRIMARY} />
      <Text style={{
        fontSize: 18,
        color: Colors.GRAY,
        marginBottom:20,
      }}>You don't have any meal plan for Today</Text>
      <Button title={'Create New Meal Plan'}></Button>
      </View>
      }
    </View>
  );
}