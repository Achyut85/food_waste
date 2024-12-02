import { useEffect, useState } from "react";
import FoodMenu from "../components/FoodMenu";
import { Navigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import TransactionHistory from "../components/TransactionHistory";

const UserApp = () => {
  const [profile, setProfile] = useState('user');

  const display = () => {
    if (profile === "user") {
      return <FoodMenu setProfile={setProfile} />;
    } else if (profile === "profile") {
      return <UserProfile setProfile={setProfile} />;
    } else if (profile === "trans") {
      return <TransactionHistory setProfile={setProfile} />;
    }
  };

  return <div>{display()}</div>;
};

export default UserApp;
