import { Dimensions, Text } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import React from "react";

const MyProgressChart = () => {
  return (
    //PROOOOOOGREEEEESSSSS
    <>
      <Text>Progress Chart</Text>
      <ProgressChart
        data={[0.4, 0.2, 0.2, 0.7]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "skyblue",
          backgroundGradientTo: "lightblue",
          color: (opacity = 255) => `rgba(0,0,0,${opacity})`,
        }}
        style={{
          borderRadius: 16,
        }}
      />
    </>
  );
};

export default MyProgressChart;
