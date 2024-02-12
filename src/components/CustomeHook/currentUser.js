import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const res = await axios.get("/current-user");
    setUser(res.data);
  };
  return user;
};
