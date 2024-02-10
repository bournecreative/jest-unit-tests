import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserList } from "./UserList";

// screen.logTestingPlaygroundURL();

test("render message if list is empty", () => {
  const users = [];
  render(<UserList users={users} />);

  const emptyListMsg = screen.queryByText(
    "No users. Please add to populate table"
  );
  expect(emptyListMsg).toBeInTheDocument();
});

test("render one row per user", () => {
  const users = [{ userName: "luke skywalk", userEmail: "luke@jedi4Life.com" }];
  const { container } = render(<UserList users={users} />);
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(1);
});