import { FlatList, Text, View } from "react-native";
import Colors from "../shared/Colors";

export default function RecipeIngredients({ recipeDetail }) {
  const ingredients = recipeDetail?.jsonData?.ingredients;
  console.log("Ingredients:", ingredients);
  return (
    <View
      style={{
        marginTop: 15,
      }}>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}>Ingredients</Text>
    <Text
        style={{
          fontSize: 18,
          
        }}>{ingredients?.length} Items</Text>
    </View>
      <FlatList
        data={ingredients}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
                justifyContent: "space-between",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap:10,
              }}
            >
              <Text
                style={{
                  padding: 7,
                  fontSize: 23,
                  backgroundColor: Colors.SECONDARY,
                  borderRadius: 99,
                }}>{item?.icon}</Text>
              <Text style={{
                  fontSize: 17,
                  fontWeight: "600",
                }}>{item?.ingredient}</Text>
            </View>
            <Text
              style={{
                color: Colors.GRAY,
                fontSize: 16,
                fontWeight: "500",
              }}
            >{item?.quantity}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
