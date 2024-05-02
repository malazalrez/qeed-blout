import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import InsetShadow from "react-native-inset-shadow";
import BGText from "./BGText";
import Button from "./Button";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const btns = [
  {
    txt: "جلسة عامة",
    backgroundColor: "#C0E5D1",
    color: "#47B881",
  },
  {
    txt: "جلسة سريعة جداً",
    backgroundColor: "#FFEAB3",
    color: "#FFAD0D",
  },
  {
    txt: "جلسة ثابتة",
    backgroundColor: "#B0CDF7",
    color: "#5493EF",
  },
  {
    txt: "جلسة ودية",
    backgroundColor: "#FFCCD2",
    color: "#F64C4C",
  },
];

const teams = ["الفريق  الأول", "الفريق  الثاني"];

const levels = [
  {
    name: "ضعيف",
    bg: "#FFCCD2",
    color: "#F64C4C",
  },
  {
    name: "مبتدئ",
    bg: "#CD7F32",
    color: "#fff",
  },
  {
    name: "جيد",
    bg: "#FFEAB3",
    color: "#FFAD0D",
  },
  {
    name: "متوسط",
    bg: "#C0C0C0",
    color: "#4D5666",
  },
  {
    name: "محترف",
    bg: "#D4AF37",
    color: "#fff",
  },
];

const firstTeam = [
  {
    username: "Saad14",
    level: 0,
  },
];
const secondTeam = [
  {
    username: "Saad14",
    level: 4,
  },
  {
    username: "Saad14",
    level: 3,
  },
];

const Card = ({ isLast, i }) => {
  return (
    <View
      style={{
        marginBottom: isLast ? 40 : 12,
      }}
      className="bg-[#262B33] rounded-2xl py-4 px-2"
    >
      <View className="bg-[#39404D] rounded-lg p-2 flex flex-row space-x-2 mb-3">
        {btns.map(({ txt, backgroundColor, color }, j) => (
          <TouchableOpacity
            key={j}
            activeOpacity={0.9}
            className="px-2 py-1 rounded-[4px]"
            style={{
              backgroundColor,
            }}
          >
            <Text
              style={{
                color,
              }}
              className="font-abold text-[8px]"
            >
              {txt}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="flex flex-row">
        <Team
          teamIndex={0}
          completed={firstTeam.length == 2}
          team={firstTeam}
          i={i}
        />
        <View className="mx-[17px] flex justify-between space-y-2">
          <View className="bg-[#4D5666] rounded-lg w-[98px] h-[28px] flex justify-center items-center">
            <Text className="font-aregular text-xs text-white">جلسة 93111</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <InsetShadow
              containerStyle={{
                borderRadius: 6,
              }}
              shadowOffset={3}
              elevation={10}
            >
              <View className="bg-[#39404D] w-[45px] h-[33px] rounded-[6px] flex items-center justify-center">
                <Text className="text-[20px] font-aebold text-[#EFB054]">
                  0
                </Text>
              </View>
            </InsetShadow>
            <InsetShadow
              containerStyle={{
                borderRadius: 6,
              }}
              shadowOffset={3}
              elevation={10}
            >
              <View className="bg-[#39404D] w-[45px] h-[33px] rounded-[6px] flex items-center justify-center">
                <Text className="text-[20px] font-aebold text-[#EFB054]">
                  0
                </Text>
              </View>
            </InsetShadow>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            className="bg-[#4D5666] rounded-lg w-[98px] h-[28px] flex justify-center items-center flex-row space-x-2"
          >
            <Feather name="eye" size={16} color="#F2BE72" />
            <Text className="font-abold text-xs text-[#F2BE72]">شاهد</Text>
          </TouchableOpacity>
        </View>
        <Team
          teamIndex={1}
          completed={secondTeam.length == 2}
          team={secondTeam}
          i={i}
        />
      </View>
    </View>
  );
};

export default Card;

const Team = ({ teamIndex, completed, team, i }) => {
  return (
    <View className="flex-1">
      <Text
        className="text-white font-abold text-xs mb-2"
        style={{
          textAlign: teamIndex ? "right" : "left",
        }}
      >
        {teams[teamIndex]}
      </Text>
      <View className="bg-[#39404D] px-2 py-1 rounded-[6px] mb-2 space-y-2 min-h-[54.5px]">
        {team.map(({ username, level }, i) => (
          <View
            key={i}
            className="flex items-center justify-between"
            style={{
              flexDirection: teamIndex ? "row-reverse" : "row",
            }}
          >
            <BGText
              px={6}
              py={4}
              size={8}
              backgroundColor={levels[level].bg}
              color={levels[level].color}
              shadowColor="#00000099"
            >
              {levels[level].name}
            </BGText>
            <Text className="text-white text-xs font-aregular">{username}</Text>
          </View>
        ))}
      </View>
      {completed ? (
        <View className="flex justify-center items-center py-2">
          <Text className="text-[#4D5666] font-abold text-xs">
            الفريق مكتمل
          </Text>
        </View>
      ) : (
        <Button
          onPress={() =>
            router.push("/status/" + (i % 2 == 0 ? "won" : "lost"))
          }
          size={12}
          textColor="#FDF5E9"
          shadowColor="#EFB05499"
          bgColor={["#EFB054", "#FFAF36"]}
        >
          العب
        </Button>
      )}
    </View>
  );
};
