import React from "react";
import { View } from "react-native";
import BatteryStatusComponent from "@/components/BatteryStatusComponent";

const BatteryStatus = () => {
  const batteryPercentage = 75; // This should be dynamically fetched in a real app
  const isCharging = false; // This should also be dynamically fetched

  return (
    <View>
      <BatteryStatusComponent
        batteryPercentage={batteryPercentage}
        isCharging={isCharging}
      />
    </View>
  );
};

export default BatteryStatus;
