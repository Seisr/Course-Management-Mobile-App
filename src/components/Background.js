import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { theme } from "../core/theme";

export default function Background({ style, children }) {
  return (
    <ImageBackground resizeMode="repeat" style={styles.background}>
      <KeyboardAvoidingView
        style={[styles.container, style]}
        behavior="padding"
      >
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0000",
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
  },
});
