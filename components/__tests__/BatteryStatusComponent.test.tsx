import React from "react";
import { render } from "@testing-library/react-native";
import BatteryStatus from "@/app/(root)/(tabs)/BatteryStatus";
import BatteryStatusComponent from "@/components/BatteryStatusComponent";
import { View, Text } from "react-native";

jest.mock("@/components/BatteryStatusComponent"); // Mock the BatteryStatusComponent

describe("BatteryStatus", () => {
  it("should pass the correct props to BatteryStatusComponent", () => {
    BatteryStatusComponent.mockImplementation(
      ({ batteryPercentage, isCharging }) => (
        <View>
          <Text>Battery: {batteryPercentage}%</Text>
          <Text>{isCharging ? "Charging" : "Not Charging"}</Text>
        </View>
      ),
    );

    const { getByText } = render(<BatteryStatus />);

    // Check if the correct battery percentage and charging status is displayed
    expect(getByText("Battery: 75%")).toBeTruthy();
    expect(getByText("Not Charging")).toBeTruthy();
  });
});
