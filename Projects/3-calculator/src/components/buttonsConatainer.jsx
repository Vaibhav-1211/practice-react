import "../App.css"

const ButtonContainer = () => {

  const buttonsNames = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", '.', '=', "+", "C"]

  return (
    <div className="buttons">
      {buttonsNames.map(buttonsName => <button>{buttonsName}</button>)}
    </div>
  )
}

export default ButtonContainer