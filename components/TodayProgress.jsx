import moment from "moment";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../context/UserContext";
import Colors from "../shared/Colors";
import { api } from "../convex/_generated/api";
import { useConvex } from "convex/react";
import { useState } from "react";
import { RefreshDataContext } from "../context/RefreshDataContext";


export default function TodayProgress() {
  const { user } = useContext(UserContext);
  const convex = useConvex();
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);
  const {refreshData,setRefreshData}=useContext(RefreshDataContext);

  useEffect(() => {
    user && GetTotalCaloriesConsumed();
  },[user,refreshData])
  const GetTotalCaloriesConsumed = async () => {
   const result = await convex.query(api.MealPlan.GetTotalCaloriesConsumed, {
      date: moment().format("DD/MM/YYYY"), // must match DB
      userId: user?._id,
    });

    setTotalCaloriesConsumed(result);
    
  }
  return (
    <View
      style={{
        marginTop: 15,
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        elevation: 3

      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Today's Goal
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          {moment().format("MMM DD, yyyy")}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
          color: Colors.PRIMARY,
        }}> {totalCaloriesConsumed}/{user?.calories} kcal</Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginTop: 2,
        }}>You'r doing great!</Text>

      <View
        style={{
          backgroundColor: Colors.GRAY,
          height: 10,
          borderRadius: 9,
          marginTop: 10,
          opacity: 0.7,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.PRIMARY,
            width: "70%",
            height: "100%",
            borderRadius: 9,

          }}>          
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}>

        <Text>Calories Consumes</Text>
        <Text>Keep it up! 🔥</Text>
      </View>
    </View>
  );
}
