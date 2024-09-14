import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import InputField from "@/components/InputField"; // Adjust the path to where InputField is located
import { icons } from "@/constants"; // Adjust the path to where your icons are located

describe("Form InputFields", () => {
  it("renders all InputField components and handles text changes", () => {
    // Mock state and setForm function
    const form = {
      name: "",
      email: "",
      password: "",
    };
    const setForm = jest.fn();

    const { getByPlaceholderText } = render(
      <>
        <InputField
          label="Name"
          placeholder="Enter your name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <InputField
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
      </>,
    );

    // Test that all input fields are rendered
    expect(getByPlaceholderText("Enter your name")).toBeTruthy();
    expect(getByPlaceholderText("Enter your email")).toBeTruthy();
    expect(getByPlaceholderText("Enter your password")).toBeTruthy();

    // Simulate text change in the "Name" field
    fireEvent.changeText(getByPlaceholderText("Enter your name"), "John Doe");
    expect(setForm).toHaveBeenCalledWith({ ...form, name: "John Doe" });

    // Simulate text change in the "Email" field
    fireEvent.changeText(
      getByPlaceholderText("Enter your email"),
      "john@example.com",
    );
    expect(setForm).toHaveBeenCalledWith({
      ...form,
      email: "john@example.com",
    });

    // Simulate text change in the "Password" field
    fireEvent.changeText(
      getByPlaceholderText("Enter your password"),
      "password123",
    );
    expect(setForm).toHaveBeenCalledWith({ ...form, password: "password123" });
  });
});
