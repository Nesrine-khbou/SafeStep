import React from "react";
import { render } from "@testing-library/react-native";
import MyBezierLineChart from "@/components/MyBezierLineChart"; // Adjust the import to match your file structure

describe("MyBezierLineChart", () => {
  it("renders the chart title", () => {
    const { getByText } = render(
      <MyBezierLineChart
        title="Test Chart"
        labels={["1PM", "2PM"]}
        dataValues={[1, 2]}
        bezierValue={true}
      />,
    );

    // Test if the title is displayed
    expect(getByText("Test Chart")).toBeTruthy();
  });
});
