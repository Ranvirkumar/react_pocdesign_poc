import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentUserLoader = ({
  endurl = "",
  children,
  sourceName = "",
}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserDetails();
  }, [endurl]);
  const fetchUserDetails = async () => {
    const res = await axios.get(endurl);
    setUser(res.data);
  };
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...{ [sourceName]: user },
          });
        }
        return child;
      })}
    </>
  );
};
