import { Text } from "react-native";
import React from "react";
import { SkiaShadow } from "react-native-skia-shadow";

const BGText = ({
  children,
  backgroundColor,
  color,
  shadowColor,
  size,
  px,
  py,
}) => {
  return (
    <SkiaShadow
      blur={5}
      dx={0}
      dy={5}
      color={shadowColor ? shadowColor : "#00000000"}
      borderRadius={4}
    >
      <Text
        style={{
          backgroundColor,
          color,
          fontSize: size || 10,
          paddingHorizontal: px || 4,
          paddingVertical: py || 6,
        }}
        className="font-abold rounded leading-[11px]"
      >
        {children}
      </Text>
    </SkiaShadow>
  );
};

export default BGText;
