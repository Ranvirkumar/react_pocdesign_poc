import { useCurrentUser } from "./components/CustomeHook/currentUser";
import { LogProps } from "./components/Hoc/logProps";
import { Recursive } from "./components/FunctionalProgramming/Recursion";
import { LargeAuthorListItem } from "./components/author/largeListItem";
import {
  LargeRedButton,
  SmallButton,
} from "./components/FunctionalProgramming/PartialComponent";

// const UserWrapper = LogProps(LargeAuthorListItem, "/current-user", "author");
const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};
function App() {
  const currentUser = useCurrentUser();
  return (
    <>
      <LargeAuthorListItem author={currentUser} />
      <Recursive data={myNestedObject} />
      <LargeRedButton text={"I am large!"} />
      <SmallButton text={"I am small"} />
    </>
  );
}

export default App;
