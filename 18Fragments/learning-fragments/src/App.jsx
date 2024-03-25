import ErrorMessage from "./components/ErrorMessage"
import FoodItems from "./components/FoodItems"
import Container from "./components/container"

const App = () => {

  return (
    <Container>
      <div className="display-5 text-center mx-auto p-3 mt-3">Healthy Food</div>
      <ErrorMessage />
      <FoodItems />

    </Container>
  )
}

export default App
