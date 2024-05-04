import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { avatar, bg, heart, lost, star, won } from "../../assets/assets";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SkiaShadow } from "react-native-skia-shadow";
import InsetShadow from "react-native-inset-shadow";
import Button from "../../components/Button";
import BGText from "../../components/BGText";

const Status = () => {
  const local = useLocalSearchParams();

  return (
    <>
      <SafeAreaView className="bg-[#131514] h-full">
        <ImageBackground source={bg} resizeMode="cover" className="flex-1">
          <View className="flex-1 justify-center items-center">
            <Image
              source={local.status == "won" ? won : lost}
              className="h-[30px] w-full -mb-2.5 relative z-20"
              resizeMode="contain"
            />
            <View className="py-[14px] bg-[#4D5666] rounded-[8px] flex flex-row items-center w-[215px] justify-center relative z-10">
              <InsetShadow
                containerStyle={{
                  borderRadius: 6,
                }}
                shadowOffset={3}
                elevation={10}
              >
                <View className="bg-[#39404D] w-[45px] h-[36px] rounded-[6px] flex items-center justify-center">
                  <Text className="text-[20px] font-aebold text-[#EFB054]">
                    3
                  </Text>
                </View>
              </InsetShadow>
              <Text className="text-[16px] font-aebold text-white mx-[14px]">
                النتيجة
              </Text>
              <InsetShadow
                containerStyle={{
                  borderRadius: 6,
                }}
                shadowOffset={3}
                elevation={10}
              >
                <View className="bg-[#39404D] w-[45px] h-[36px] rounded-[6px] flex items-center justify-center">
                  <Text className="text-[20px] font-aebold text-[#EFB054]">
                    14
                  </Text>
                </View>
              </InsetShadow>
            </View>
            <View className="rounded-[16px] bg-[#262B33] p-4 -mt-2 w-[265px]">
              <View className="flex flex-row space-x-6 items-center justify-end mb-2">
                <View className="flex flex-row items-center space-x-2">
                  <View>
                    <BGText
                      backgroundColor="#C0C0C0"
                      color="#4D5666"
                      shadowColor="#00000099"
                      size={12}
                    >
                      متوسط
                    </BGText>
                  </View>
                  <Text className="font-abold text-xs text-white">المستوى</Text>
                </View>
                <View className="flex justify-center items-center">
                  <Image source={avatar} className="w-[77px] h-[77px]" />
                  <View className="-mt-[10px]">
                    <SkiaShadow
                      blur={3}
                      dx={0}
                      dy={3}
                      color="#00000040"
                      borderRadius={8}
                    >
                      <View className="py-1 w-[62px] bg-white flex justify-center items-center rounded-[6.67px]">
                        <Text className="text-[6.67px]">Saad14</Text>
                      </View>
                    </SkiaShadow>
                  </View>
                </View>
              </View>
              <View className="w-full h-5 bg-[#FDF5E9] rounded p-1">
                <View className="overflow-hidden w-full h-full bg-[#F9E0BC] rounded relative flex flex-row justify-between items-center px-1">
                  <View className="bg-[#EFB054] h-full w-[70%] rounded-tl-xl rounded-bl-xl absolute top-0 right-0"></View>
                  <Image source={heart} className="w-2 h-2" />
                  <Text className="font-abold text-white text-[8px]">
                    <Text className="text-[#FFDD82]">2800/</Text>
                    2721
                  </Text>
                  <Image source={star} className="w-2 h-2" />
                </View>
              </View>
              <Text className="text-[8px] font-abold text-white text-center mt-3 mb-2.5">
                النقاط المحسومة
              </Text>
              <Text
                className="text-xl font-abold text-center mb-6"
                style={{
                  color: local.status == "won" ? "#47B881" : "#F64C4C",
                }}
              >
                {local.status == "won" ? "+" : "-"}36
              </Text>
              <View className="bg-[#39404D] px-2 py-4 rounded-lg flex flex-row justify-between items-start relative z-10">
                <View className="gap-2 flex items-center">
                  <Text className="text-[10px] font-aregular text-white">
                    التقييم العام
                  </Text>
                  <View>
                    <BGText backgroundColor="#FFEAB3" color="#FFAD0D">
                      جيد
                    </BGText>
                  </View>
                </View>
                <View className="gap-3 flex items-center">
                  <Text className="text-[10px] font-aregular text-white">
                    القطع والقيد
                  </Text>
                  <Text className="text-[10px] font-abold text-[#0E0F11] rounded">
                    لعب محدود
                  </Text>
                </View>
                <View className="gap-2 flex items-center">
                  <Text className="text-[10px] font-aregular text-white">
                    اللعب والمشترى
                  </Text>
                  <View>
                    <BGText backgroundColor="#FFCCD2" color="#F64C4C">
                      ضغيف
                    </BGText>
                  </View>
                </View>
              </View>
              <View className="my-2">
                <Button
                  textColor="white"
                  bgColor={["#EFB054", "#FFAF36"]}
                  shadowColor="#EFB05499"
                >
                  ألعب مرة اخرى
                </Button>
              </View>
              <Button
                onPress={() => router.dismissAll()}
                bgColor="#4D5666"
                textColor="#F2BE72"
                shadowColor="#FDF5E966"
              >
                مغادرة
              </Button>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Status;
