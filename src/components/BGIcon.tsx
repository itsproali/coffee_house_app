import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { BORDERRADIUS, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";

type IProps = {
  name: string;
  color: string;
  size?: number;
  bgColor: string;
};

const BGIcon: FC<IProps> = ({ name, color, size, bgColor }) => {
  return (
    <View style={[styles.iconBG, { backgroundColor: bgColor }]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
  },
});
export default BGIcon;
