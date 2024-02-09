import styles from "./styles.module.css";

export const UserList = ({ users }) => {
  return (
    <div>
      {!users.length ? (
        "No users. Please add to populate table"
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <td>User Name</td>

              <td>User Email</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.userName + user.userEmail}>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
