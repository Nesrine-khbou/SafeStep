import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BatteryStatusComponent = ({ batteryPercentage, isCharging }) => {
  let batteryCondition = "Unknown";
  let batteryIcon = "battery";

  // Determine battery condition and icon
  if (batteryPercentage >= 80) {
    batteryCondition = "Full";
    batteryIcon = "battery-full";
  } else if (batteryPercentage >= 50) {
    batteryCondition = "Good";
    batteryIcon = "battery-half";
  } else if (!isCharging && batteryPercentage < 20) {
    // When the battery is low and not charging, show a red battery icon
    batteryCondition = "Low Battery";
    batteryIcon = "battery-dead"; // Use a suitable battery icon
  } else {
    batteryCondition = "Low Battery";
    batteryIcon = "battery-low";
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Ionicons
          name={isCharging ? "battery-charging" : batteryIcon}
          size={50}
          color={!isCharging && batteryPercentage < 20 ? "red" : "green"}
        />
      </View>
      <Text style={styles.percentageText}>{batteryPercentage}%</Text>
      <Text style={styles.conditionText}>Condition: {batteryCondition}</Text>
      <Text style={styles.chargingText}>
        Status: {isCharging ? "Charging" : "Not Charging"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  percentageText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  conditionText: {
    fontSize: 20,
    marginBottom: 5,
  },
  chargingText: {
    fontSize: 20,
    color: "gray",
  },
});

export default BatteryStatusComponent;
