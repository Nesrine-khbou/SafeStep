import React from "react";
import { render } from "@testing-library/react-native";
import OnBoarding from "@/app/(auth)/welcome";

// Mock the necessary components and constants
jest.mock("expo-router", () => ({
  router: {
    replace: jest.fn(),
  },
}));

jest.mock("react-native-swiper", () => (props) => <>{props.children}</>);

jest.mock("@/components/CustomButton", () => (props) => (
  <button onClick={props.onPress}>{props.title}</button>
));

jest.mock("@/constants", () => ({
  onboarding: [
    {
      id: "1",
      image: "mock-image-path",
      title: "Welcome",
      description: "This is the first slide",
    },
  ],
}));

describe("OnBoarding", () => {
  it("renders correctly", () => {
    const { getByText } = render(<OnBoarding />);

    // Check if the Skip button is rendered
    expect(getByText("Skip")).toBeTruthy();

    // Check if the onboarding text is rendered
    expect(getByText("Welcome")).toBeTruthy();
    expect(getByText("This is the first slide")).toBeTruthy();
  });
});
