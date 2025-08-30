import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ProfileScreenPage from "../../components/profileScreen/profileScreen";

export default function Home() {
  return (
    <View style={styles.container}>
      <ProfileScreenPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


