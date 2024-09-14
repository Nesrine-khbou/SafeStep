import React from "react";
import { render } from "@testing-library/react-native";
import InputField from "@/components/InputField"; // Adjust this path based on your project structure

// Mock user object
const user = {
  firstName: "John",
  lastName: "Doe",
  primaryEmailAddress: { emailAddress: "john.doe@example.com" },
};

describe("InputField components", () => {
  it("should render InputField with 'First name' label and placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField
        label="First name"
        placeholder={user.firstName || "Nesrine"}
        containerStyle="w-full"
        inputStyle="p-3.5"
        editable={false}
      />,
    );

    expect(getByText("First name")).toBeTruthy(); // Verifies the label is rendered
    expect(getByPlaceholderText("John")).toBeTruthy(); // Verifies the placeholder is rendered
  });

  it("should render InputField with 'Last name' label and placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField
        label="Last name"
        placeholder={user.lastName || "Khbou"}
        containerStyle="w-full"
        inputStyle="p-3.5"
        editable={false}
      />,
    );

    expect(getByText("Last name")).toBeTruthy(); // Verifies the label is rendered
    expect(getByPlaceholderText("Doe")).toBeTruthy(); // Verifies the placeholder is rendered
  });

  it("should render InputField with 'Email' label and placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField
        label="Email"
        placeholder={user.primaryEmailAddress.emailAddress || "Not Found"}
        containerStyle="w-full"
        inputStyle="p-3.5"
        editable={false}
      />,
    );

    expect(getByText("Email")).toBeTruthy(); // Verifies the label is rendered
    expect(getByPlaceholderText("john.doe@example.com")).toBeTruthy(); // Verifies the placeholder is rendered
  });

  it("should render 'Not Found' if email is missing", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField
        label="Email"
        placeholder={undefined || "Not Found"}
        containerStyle="w-full"
        inputStyle="p-3.5"
        editable={false}
      />,
    );

    expect(getByText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Not Found")).toBeTruthy();
  });
});
