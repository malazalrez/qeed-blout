import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { bg } from "../assets/assets";
import HButton from "../components/HButton";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import InsetShadow from "react-native-inset-shadow";
import Select from "../components/Select";
import { SkiaShadow } from "react-native-skia-shadow";
import Card from "../components/Card";

const items = [...new Array(100)];

const Index = () => {
  return (
    <SafeAreaView className="bg-[#131514] h-full">
      <ImageBackground source={bg} resizeMode="cover" className="flex-1">
        <View className="z-10">
          <SkiaShadow blur={20} dx={0} dy={0} color="#131514">
            <View className="bg-[#262B33] pt-[26px] px-2 pb-4 rounded-bl-2xl rounded-br-2xl">
              <View className="flex pb-[31.5px] items-center justify-between flex-row px-6">
                <HButton
                  icon={<Feather name="search" size={16} color="#262B33" />}
                >
                  بحث
                </HButton>
                <TouchableOpacity
                  activeOpacity={0.9}
                  className="bg-[#404040] p-4 rounded-md"
                >
                  <Text className="text-[#EFB054] font-abold text-xs">
                    الجلسات
                  </Text>
                </TouchableOpacity>
                <HButton
                  icon={
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={16}
                      color="#262B33"
                    />
                  }
                >
                  عودة
                </HButton>
              </View>
              <View className="flex flex-row gap-x-2">
                <View className="flex-1">
                  <Select label="نوع اللعب" />
                </View>
                <View className="flex-1">
                  <Select label="سرعة اللعب" />
                </View>
                <View className="flex-1">
                  <Select label="الخصوصية" />
                </View>
                <View className="flex-1">
                  <Select label="نوع الجلسة" />
                </View>
              </View>
            </View>
          </SkiaShadow>
        </View>
        <ScrollView className="p-2 pt-6 -mt-1">
          {items.map((item, i) => (
            <Card i={i} key={i} isLast={i == items.length - 1} />
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
