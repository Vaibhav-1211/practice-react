const TodoItem = ({ todoName, todoDate }) => {

  return (
    <div className="container text-center mt-4">
      <div className="row mt-3">
        <div className="col-6">
          <p className="h6 text-start">{todoName}</p>
        </div>
        <div className="col-4 text-middle">
          {todoDate}
        </div>
        <div className="col-2">
          <button className="btn btn-danger form-control" type="button">Delete</button>
        </div>
      </div>
    </div>
  )
  }  
export default TodoItem