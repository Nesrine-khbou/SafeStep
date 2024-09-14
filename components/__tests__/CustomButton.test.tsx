import { it, expect, describe } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "@/components/CustomButton";

describe("CustomButton", () => {
  // Test to check if the button renders correctly with the title "Next"
  it("should render 'Next' as the button title", () => {
    const { getByText } = render(<CustomButton title="Next" />);
    expect(getByText("Next")).toBeTruthy(); // Ensure the button with "Next" is rendered
  });

  // Test to check if the button press works (if the button has onPress handler)
  it("should trigger the onPress function when clicked", () => {
    const mockOnPress = jest.fn(); // Create a mock function
    const { getByText } = render(
      <CustomButton title="Next" onPress={mockOnPress} />,
    );

    fireEvent.press(getByText("Next")); // Simulate button press
    expect(mockOnPress).toHaveBeenCalledTimes(1); // Ensure the onPress function is called once
  });
});
