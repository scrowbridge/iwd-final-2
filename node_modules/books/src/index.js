const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\books\src\index.js</pre>
    </>
  );
};

export default {
  name: "books",
  roots: {
    books: Root
  },
  state: {
    books: {}
  },
  actions: {
    books: {}
  }
};
