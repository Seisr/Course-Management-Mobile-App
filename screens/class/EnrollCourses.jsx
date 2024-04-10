import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const EnrollCourses = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
        <Text></Text>
      </View> */}
      <View>
        <Text>
          Course_Id <Icon name="create-outline" />
        </Text>
        <Text>
          Course_Id <Icon name="create-outline" />
        </Text>
        <Text>
          Course_Id <Icon name="create-outline" />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    flex: 1,
    alignItem: "center",
    justifyContent: "center",
  },
  login_input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});

export default EnrollCourses;
