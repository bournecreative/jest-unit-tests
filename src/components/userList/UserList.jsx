export const UserList = ({ users }) => {
  return (
    <table>
      {!users.length
        ? "No users. Please add to populate table"
        : users.map((user) => {
            return (
              <tr>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
              </tr>
            );
          })}
    </table>
  );
};
