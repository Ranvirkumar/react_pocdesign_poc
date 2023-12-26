import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentUserRenderPropsLoader = ({ endurl = "", render }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserDetails();
  }, [endurl]);
  const fetchUserDetails = async () => {
    const res = await axios.get(endurl);
    setUser(res.data);
  };
  return render(user);
};
