const isValidObj = (data) => typeof data === "object" && data !== null;

export const Recursive = ({ data }) => {
  if (!isValidObj(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
