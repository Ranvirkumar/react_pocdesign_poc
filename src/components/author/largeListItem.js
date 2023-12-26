export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author || "";
  return author ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <h2>Country: {country}</h2>
      <ul>
        {books?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading</h1>
  );
};
