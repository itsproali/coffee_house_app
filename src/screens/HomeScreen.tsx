import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useStore } from "../store/store";
import { getCategoriesFromData, getCoffeeList } from "../utils/utils";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import CustomIcon from "../components/CustomIcon";
import { ICoffee } from "../interface/commonInterface";
import ItemCard from "../components/ItemCard";

const HomeScreen = () => {
  // ----- Store
  const { CoffeeList, BeansList } = useStore();

  // ----- State
  const [categories, setCategories] = useState<string[]>(
    getCategoriesFromData(CoffeeList)
  );
  const [searchText, setSearchText] = useState<string>("");
  const [categoryIndex, setCategoryIndex] = useState<{
    index: number;
    category: string;
  }>({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState<ICoffee[]>(
    getCoffeeList(categoryIndex.category, CoffeeList)
  );

  // ----- Hooks
  const listRef = useRef<FlatList | null>(null);
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

        {/* Title */}
        <Text style={styles.title}>Find the best{"\n"}Coffee for you</Text>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.searchIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCategoryIndex({ index, category });
                setSortedCoffee(getCoffeeList(category, CoffeeList));
                listRef.current?.scrollToOffset({
                  animated: true,
                  offset: 0,
                });
              }}
            >
              <Text
                style={[
                  categoryIndex.index === index
                    ? styles.activeCategory
                    : styles.normalCategory,
                  styles.categoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Coffee Flat List */}
        <FlatList
          ref={listRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <ItemCard data={item} />
              </TouchableOpacity>
            );
          }}
        ></FlatList>

        {/* Coffee Beans */}
        <Text style={styles.coffeeBeansTitle}>Coffee Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeansList}
          contentContainerStyle={[
            styles.flatListContainer,
            { marginBottom: tabBarHeight },
          ]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <ItemCard data={item} />
              </TouchableOpacity>
            );
          }}
        ></FlatList>
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

  title: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },

  searchContainer: {
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginHorizontal: SPACING.space_20,
  },
  searchInput: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    paddingRight: SPACING.space_20,
  },

  categoryScroll: {
    paddingHorizontal: SPACING.space_30,
    marginBottom: SPACING.space_20,
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    marginRight: SPACING.space_20,
    paddingVertical: SPACING.space_2,
  },
  activeCategory: {
    color: COLORS.primaryWhiteHex,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_10,
    paddingHorizontal: SPACING.space_12,
  },
  normalCategory: {
    color: COLORS.primaryLightGreyHex,
  },

  flatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  coffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default HomeScreen;
