import { useState } from "react";
import { UserForm } from "./components/userForm/UserForm";
import { UserList } from "./components/userList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (obj) => {
    setUsers([...users, obj]);
  };

  return (
    <div className="App">
      <h1>Jest Unit Testing</h1>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}

export default App;
