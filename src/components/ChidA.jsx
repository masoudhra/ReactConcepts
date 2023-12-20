import StylesDiv from "./StylesDiv";

function ChildA({ number, setNumber }) {
  return (
    <StylesDiv>
      <h3>Child A</h3>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </StylesDiv>
  );
}

export default ChildA;
