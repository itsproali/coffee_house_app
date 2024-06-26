// ----- Root Params
export type RootStackParamList = {
  Tab: undefined;
  Details: undefined;
  Payment: undefined;
};

// ----- Tab Params
export type TabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  OrderHistory: undefined;
};

// ----- Store
export interface IStore {
  CoffeeList: ICoffee[];
  BeansList: IBeans[];
  FavoriteList: any[];
  CartList: any[];
  OrderHistoryList: any[];
  CartPrice: number;
}

// ----- Coffee
export interface ICoffee {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: { size: string; price: string; currency: string }[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
}

// ----- Beans
export interface IBeans {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: Array<{
    size: string;
    price: string;
    currency: string;
  }>;
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
}
