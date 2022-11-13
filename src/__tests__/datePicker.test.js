import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import DatePicker from "../components/DatePicker";

describe("DatePicker test", () => {
  it("should render DatePicker", () => {
    render(<DatePicker />);
  });
});
