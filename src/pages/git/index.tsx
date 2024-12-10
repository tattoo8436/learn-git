import "./styles.css";

const Git = () => {
  const test1 = () => {
    console.log("1");
    console.log("2");
    console.log("3");
  };

  const test2 = () => {
    console.log("145");
  };
  // test1();
  // test2();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Git</h1>
      <div>
        <p>1.1</p>
        <p>1.2</p>
        <p>1.3</p>
      </div>
    </div>
  );
};

export default Git;
