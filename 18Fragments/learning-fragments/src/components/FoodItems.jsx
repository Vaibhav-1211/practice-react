import Items from "./Items"

const FoodItems = () => {
  let foodItems = ["Dal", "Roti", "Rice", "salad", "fruits"]
  return (
    <div>
      <ul className="list-group border">
        {foodItems.map((item) => (
          <Items key={item} foodItem={item}/>
        ))}
      </ul>
    </div>
  )
}

export default FoodItems

 // let foodItems = ["Dal", "Roti", "Rice", "salad", "fruits"]
  // let emptymessage = foodItems.length === 0 ? <h3>I Still hungry</h3> :null;
  // let foodItems = []
  // if(foodItems.length === 0){
  //   return <h3>I Still hungry</h3>
  // }
  //Parent to child data passed vie props