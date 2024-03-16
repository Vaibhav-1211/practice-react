function Random() {
  let num = Math.random() * 100;
  return <h1 style={{'background-color':'#776691'}}>Random number is:{Math.round(num)}</h1>
}

//here curly beaces means expression
//for inline css double curly braces are used 

export default Random;