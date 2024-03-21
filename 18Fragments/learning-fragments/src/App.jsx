import ErrorMessage from "./components/ErrorMessage"
import FoodItems from "./components/FoodItems"

const App = () => {

  return (
    <div>
      <div className="display-5 text-center mx-auto p-3 mt-3">Healthy Food</div>
      <ErrorMessage />
      <FoodItems />

    </div>
  )
}

export default App
