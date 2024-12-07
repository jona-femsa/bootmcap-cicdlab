import React from "react";
import renderer from "react-test-renderer";
import HomeScreen from "../src/screens/HomeScreen";

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));
 
test("HomeScreen component renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});