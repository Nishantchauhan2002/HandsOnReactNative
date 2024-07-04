import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className="border-2 
      border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex flex-row items-center"
      >
        <TextInput
          className="flex-1 text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        ></TextInput>
      </View>
    </View>
  );
};

export default FormField;
