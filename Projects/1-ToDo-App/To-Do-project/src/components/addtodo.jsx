function AddTodo() {
  return (
    <div className="container text-center mt-4">
      <div className="row ">
        <div className="col-6">
          <input className="form-control" type="text" placeholder="Enter to-do here" />
        </div>
        <div className="col-4">
          <input className="form-control" type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control" type="button">ADD</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo