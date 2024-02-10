import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders a list", async () => {
  render(<App />);

  // react recommends we identify elements by role
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  const button = screen.getByRole("button");
  await user.click(nameInput);
  await user.keyboard("boba fett");
  await user.click(emailInput);
  await user.keyboard("boba@bounty.com");
  act(() => {
    user.click(button);
  });

  // screen.debug();
  const name = screen.getByRole("cell", { name: "boba fett" });
  const email = screen.getByRole("cell", { name: "boba@bounty.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
