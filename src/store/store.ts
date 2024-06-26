import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import { IStore } from "../interface/commonInterface";

export const useStore = create<IStore>()(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
      CartPrice: 0,
    }),
    {
      name: "coffee_house",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
