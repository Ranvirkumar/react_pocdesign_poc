export const LargebookListItem = ({ book }) => {
  const { name, pages, title, price } = book || "";
  return book ? (
    <>
      <h2>{name}</h2>
      <p> {price}</p>
      <h2>Title</h2>
      <p>{title}</p>
      <p># of page :{pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};
