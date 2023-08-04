import React from "react";
import LoginButton from "../Login";
import LogoutButton from "../Logout";
import Profile from "../Profile";

export default function Header() {
  return (
    <div>
      <h1>AUTH0-MORPH</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}
