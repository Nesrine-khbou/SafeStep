import React from "react";
import { Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const MyBezierLineChart = ({ title, labels, dataValues, bezierValue }) => {
  return (
    <>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#515151",
          marginBottom: 15,
        }}
      >
        {title}
      </Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataValues,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#e1f2f5",
          backgroundGradientTo: "#e6f3f5",
          decimalPlaces: 1,
          color: (opacity = 255) => `rgba(0,0,0,${opacity})`,
        }}
        bezier={bezierValue}
        style={{
          borderRadius: 16,
          marginBottom: 50,
        }}
      />
    </>
  );
};

export default MyBezierLineChart;
