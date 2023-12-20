

function ChildB({number, text}) {
  return (
    <div style={{border: "2px solid black", padding: "10px", margin: "20px"}}>
      <h3>Child B</h3>
      <p>{number}</p>
      {text}
    </div>
    
  )
}

export default ChildB