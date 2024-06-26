import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useStore } from "../store/store";
import { getCoffeeList } from "../utils/utils";
import { COLORS } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";

const HomeScreen = () => {
  // ----- Store
  const { CoffeeList, BeansList } = useStore();

  // ----- State
  const [categories, setCategories] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [categoryIndex, setCategoryIndex] = useState<{
    index: number;
    category: string;
  }>({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  );

  // ----- Hooks
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        {/* App Header */}
        <HeaderBar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
});

export default HomeScreen;
