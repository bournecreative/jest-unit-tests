import { useState, useEffect } from "react";

export const UserForm = () => {
  const [{ userName, userEmail }, setUserData] = useState({
    userName: "",
    userEmail: "",
  });

  useEffect(() => {
    console.log(userName);
    console.log(userEmail);
  }, [{ userName, userEmail }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const el = e.target;
    const formInfo = new FormData(el);
    const nameValue = formInfo.get("user-name");
    const emailValue = formInfo.get("user-email");
    setUserData({ userName: nameValue, userEmail: emailValue });
    el.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">User Name</label>
        <br />
        <input id="userName" name="user-name" />
      </div>
      <div>
        <label htmlFor="userEmail">User Email</label>
        <br />
        <input id="userEmail" name="user-email" />
      </div>
      <div>
        <button type="submit">Submit User data</button>
      </div>
    </form>
  );
};
