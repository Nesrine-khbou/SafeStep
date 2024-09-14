import React from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import MyBezierLineChart from "@/components/MyBezierLineChart";

const Infos = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <MyBezierLineChart
          title="Crutch Falling History"
          labels={["1PM", "2PM", "3PM", "4PM"]}
          dataValues={[1, 4, 0, 2]}
          bezierValue={true}
        />
        <MyBezierLineChart
          title="Crutch Led Activation History"
          labels={["1PM", "2PM", "3PM", "4PM"]}
          dataValues={[0, 0, 1, 0]}
          bezierValue={true}
        />
        <MyBezierLineChart
          title="Crutch distance History"
          labels={["1PM", "2PM", "3PM", "4PM"]}
          dataValues={[
            233, 233, 150, 100, 250, 300, 100, 20, 20, 50, 80, 120, 150, 70, 90,
            200, 230,
          ]}
          bezierValue={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Infos;

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    paddingTop: 50, // Increased space at the top
    paddingBottom: 60, // Increased space at the bottom
  },
  chartContainer: {
    width: Dimensions.get("window").width - 20,
    marginBottom: 20,
  },
});
