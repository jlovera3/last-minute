// MailContact.tsx (modificado)
import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "@/src/styles/tailwind";

interface MailContactProps {
  email: string;
}

export default function MailContact({ email }: MailContactProps) {
  const handleEmail = () => Linking.openURL(`mailto:${email}`);

  return (
    <TouchableOpacity
      testID="mail-contact"
      onPress={handleEmail}
      style={tw`flex-row items-center justify-center bg-blue-500 p-4 rounded-lg mt-2`}
    >
      <MaterialIcons name="email" size={24} color="white" />
      <Text style={tw`text-white font-bold text-lg ml-2`}>Email</Text>
    </TouchableOpacity>
  );
}
