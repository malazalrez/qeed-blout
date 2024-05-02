import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";

const Select = ({ label }) => {
  const emojisWithIcons = ["الكل"];
  return (
    <View>
      <Text className="text-white font-aregular text-[10px] mb-1">{label}</Text>
      <SelectDropdown
        data={emojisWithIcons}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View>
              <View className="h-[34px] bg-[#39404D] rounded-[5px] px-[10px] flex flex-row items-center justify-between">
                <Text className="text-white font-aregular text-[10px]">
                  الكل
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={16}
                  color="#EFB054"
                />
              </View>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        // showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default Select;
