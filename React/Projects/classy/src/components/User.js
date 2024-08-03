const User = ({ name }) => {
  return (
    <div className="userCard">
      <h1>Name: {name}</h1>
      <h2>Location: {'India'}</h2>
    </div>
  )
}

export default User;