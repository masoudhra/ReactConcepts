

function StylesDiv(props) {
    const styles = { border: "2px solid black", padding: "10px", margin: "20px" }
  return (
    <div style={styles}><h3>{props.title}</h3>{props.children}</div>
  )
}

export default StylesDiv