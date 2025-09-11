import { CalendarAdd01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useConvex } from 'convex/react';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RefreshDataContext } from '../context/RefreshDataContext';
import { UserContext } from '../context/UserContext';
import { api } from '../convex/_generated/api';
import Colors from "../shared/Colors";
import MealPlanCard from './MealPlanCard';
import Button from './shared/Button'; // Assuming you have a Button component

export default function TodaysMealPlan({selectedDate}) {
  const [mealPlan, setMealPlan] = useState([]);
  const convex = useConvex();
  const { user } = useContext(UserContext);
  const {refreshData,setRefreshData}=useContext(RefreshDataContext);

  useEffect(() => {
  if (!user) return;
  (async () => {
    await GetTodaysMealPlan();
  })();
}, [user,refreshData,selectedDate]);

  const GetTodaysMealPlan = async () => {
    console.log("-",selectedDate)
    const result = await convex.query(api.MealPlan.GetTodaysMealPlan, {
      date:selectedDate?? moment().format("DD/MM/YYYY"), // must match DB
      userId: user?._id,
    });
    console.log("Today's meal plan:", result);
    setMealPlan(result);
  };

  return (
    <View style={{ margin: 15 }}>
     {!selectedDate&& <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Today's Meal Plan
      </Text>}

      {mealPlan.length === 0 ? (
        <View style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
          <HugeiconsIcon
            icon={CalendarAdd01Icon}
            size={40}
            color={Colors.PRIMARY}
          />
          <Text
            style={{
              fontSize: 18,
              color: Colors.GRAY,
              marginBottom: 20,
            }}
          >
            You don't have any meal plan for Today
          </Text>
          <Button title={'Create New Meal Plan'} />
        </View>
      ) : (
        <FlatList
          data={mealPlan}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <MealPlanCard MealPlanInfo={item} />
          )}
        />
      )}
    </View>
  );
}
