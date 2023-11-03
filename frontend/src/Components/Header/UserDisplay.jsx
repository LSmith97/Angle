const UserDisplay = ({ user }) => {
  return (
    <div className="user-display">
      <h3>Signed in as:</h3>
      <img
        className="h-10 w-10 rounded-full"
        src={user.picture}
        alt={user.name}
      />
      <h3>{user.name}</h3>
    </div>
  );
};

export default UserDisplay;
