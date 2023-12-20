import StylesDiv from "./StylesDiv";

function ChildB({ number, text }) {
  return (
    <StylesDiv>
      <h3>Child B</h3>
      <p>{number}</p>
      {text}
    </StylesDiv>
  );
}

export default ChildB;
