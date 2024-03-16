const CurrentTime = () => {
  let time = new Date();

  return <p className="display-1"><strong>Current Time:{time.toLocaleTimeString()}</strong></p>

}

export default CurrentTime;