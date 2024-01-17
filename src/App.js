import { RegularList } from "./components/List/regular";
import { Modal } from "./components/Modal";
import { LargeAuthorListItem } from "./components/author/largeListItem";
// import { SmallAuthorListItem } from "./components/author/smallListItem";
import { LargebookListItem } from "./components/book/largeListItem";
import { CurrentUserLoader } from "./components/current_user_loader";
// import { SmallBookListItem } from "./components/book/smallListItem";
import { SplitScreen } from "./components/split-screen";
import { UnControlledForm } from "./components/Form/uncountrolled_form";
import { CurrentUserRenderPropsLoader } from "./components/user_loader_renderProps";
// import { authors } from "./data/author";
import { books } from "./data/book";
import { UnControlledFlow } from "./components/Form/unControlled_flow";

const LeftScreen = ({ title = "" }) => {
  return <h1 style={{ backgroundColor: "cadetblue" }}>{title}</h1>;
};
const RightScreen = ({ title = "" }) => {
  return <h1 style={{ backgroundColor: "hotpink" }}>{title}</h1>;
};
const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
function App() {
  return (
    <>
      <SplitScreen rightWidth={3}>
        <LeftScreen title={"I am left!"} />
        <RightScreen title={"I am Right!"} />
      </SplitScreen>
      {/* <UnControlledForm /> */}
      <UnControlledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledFlow>
      {/* <CurrentUserLoader sourceName="author" endurl="/current-user">
        <LargeAuthorListItem />
      </CurrentUserLoader>
      <CurrentUserLoader sourceName="items" endurl="/users">
        <RegularList
          sourceName={"author"}
          ItemComponent={LargeAuthorListItem}
        />
      </CurrentUserLoader>
      <CurrentUserRenderPropsLoader
        sourceName="items"
        endurl="/books"
        render={(items) => (
          <RegularList
            items={items}
            sourceName={"book"}
            ItemComponent={LargebookListItem}
          />
        )}
      /> */}
      {/* <Modal>
        <LargebookListItem book={books[0]} />
      </Modal> */}
      {/* <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargebookListItem}
      /> */}
    </>
  );
}

export default App;
