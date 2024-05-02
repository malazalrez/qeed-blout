import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { SkiaShadow } from "react-native-skia-shadow";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({
  bgColor,
  textColor,
  shadowColor,
  children,
  onPress,
  size,
}) => {
  return (
    <SkiaShadow blur={20} dx={4} dy={4} color={shadowColor} borderRadius={8}>
      <TouchableOpacity
        onPress={onPress}
        className="w-full"
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={typeof bgColor == "object" ? bgColor : [bgColor, bgColor]}
          className="py-2 rounded-lg"
        >
          <Text
            className="text-center font-abold text-white"
            style={{
              color: textColor,
              fontSize: size || 16,
            }}
          >
            {children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SkiaShadow>
  );
};

export default Button;
