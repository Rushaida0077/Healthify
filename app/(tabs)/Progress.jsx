import { useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DateSelection from '../../components/DateSelection';
import GenerateRecipeCard from '../../components/GenerateRecipeCard';
import TodayProgress from '../../components/TodayProgress';
import TodaysMealPlan from '../../components/TodaysMealPlan';

export default function Progress() {
  const [selectedDate,setSelectedDate]=useState();
  return (
    <FlatList
    data={[]}
    renderItem={()=>null}
    ListHeaderComponent={
    <View style={{
      padding:20,
      paddingTop:40
    }}>
      <Text style={{
        fontSize:25,
        fontWeight:'bold',
      }}>Progress</Text>
      <DateSelection setSelectedDate={setSelectedDate}/>
      <TodaysMealPlan date={selectedDate}/>
      <TodayProgress />
      <GenerateRecipeCard />



    </View>}/>
  )
}