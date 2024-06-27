import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { ICoffee } from "../interface/commonInterface";
import LinearGradient from "react-native-linear-gradient";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import CustomIcon from "./CustomIcon";
import BGIcon from "./BGIcon";

type IProps = {
  data: ICoffee;
};

const CARD_WIDTH = Dimensions.get("window").width * 0.32;

const ItemCard: FC<IProps> = ({ data }) => {
  const {
    id,
    name,
    description,
    imagelink_portrait,
    imagelink_square,
    prices,
    average_rating,
    type,
    special_ingredient,
  } = data;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground
        source={imagelink_square}
        style={styles.imageBG}
        resizeMode="cover"
      >
        <View style={styles.ratingContainer}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_18}
          />
          <Text style={styles.ratingText}>{average_rating}</Text>
        </View>
      </ImageBackground>

      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>{special_ingredient}</Text>

      <View style={styles.cardFooter}>
        <Text style={styles.currency}>
          $ <Text style={styles.price}>{prices[2].price}</Text>
        </Text>

        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            name="add"
            color={COLORS.primaryWhiteHex}
            bgColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  imageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: "hidden",
  },
  ratingContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: "absolute",
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    lineHeight: 22,
  },

  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  subTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACING.space_15,
  },
  currency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  price: {
    color: COLORS.primaryWhiteHex,
  },
});

export default ItemCard;
