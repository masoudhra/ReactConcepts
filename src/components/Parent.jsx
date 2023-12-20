import { useState } from "react";
import ChildA from "./ChidA";
import ChildB from "./ChildB";
import StylesDiv from "./StylesDiv";

function Parent() {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    setNumber((number) => number + 1);
  };
  return (
    
      <StylesDiv title={"parent"}>
      
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <ChildA number={number} setNumber={setNumber} />
      <ChildB
        number={number}
        text={<button onClick={clickHandler}>+</button>}
      />
      </StylesDiv>
    
  );
}

export default Parent;
