import { IBeans, ICoffee } from "../interface/commonInterface";

export const getCategoriesFromData = (data: ICoffee[] | IBeans[]): string[] => {
  let temp: {
    [key: string]: number;
  } = {};
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (temp[element.name] == undefined) {
      temp[element.name] = 1;
    } else {
      temp[element.name]++;
    }
  }

  let categories = Object.keys(temp);
  categories.unshift("All");
  return categories;
};

export const getCoffeeList = (category: string, data: ICoffee[]): ICoffee[] => {
  if (category === "All") {
    return data;
  }
  return data.filter((item) => item.name === category);
};
