import React, { useState } from "react";

export const UnControlledFlow = ({ children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const goNext = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };
  const currentChild = React.Children.toArray(children)[currentStepIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};
