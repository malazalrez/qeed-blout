import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { SkiaShadow } from "react-native-skia-shadow";

const HButton = ({ children, icon }) => {
  return (
    <SkiaShadow blur={11} dx={4} dy={4} color="#FDF5E955" borderRadius={16}>
      <TouchableOpacity
        activeOpacity={0.9}
        className="bg-[#4D5666] p-3 flex flex-row gap-x-1 rounded-2xl items-center"
      >
        {icon}
        <Text className="text-xs text-[#262B33] font-aebold">{children}</Text>
      </TouchableOpacity>
    </SkiaShadow>
  );
};

export default HButton;
