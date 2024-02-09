import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserForm } from "./UserForm";

test("DOM reflects 2 inputs and a button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("call onAddUser when the form is submitted", () => {
  const mock = jest.fn();

  render(<UserForm onAddUser={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  user.click(nameInput);
  user.keyboard("boba fett");

  user.click(emailInput);
  user.keyboard("boba@bounty.com");
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    userName: "boba fett",
    userEmail: "boba@bounty.com",
  });
});