import axios from "axios";
import { useEffect, useState } from "react";

export const LogProps = (Component, endurl, sourceName) => {
  return (props) => {
    const [user, setUser] = useState();
    useEffect(() => {
      fetchUserDetails();
    }, [endurl]);
    const fetchUserDetails = async () => {
      const res = await axios.get(endurl);
      setUser(res.data);
    };
    return <Component {...props} {...{ [sourceName]: user }} />;
  };
};
