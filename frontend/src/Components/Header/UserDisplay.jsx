const UserDisplay = ({ user }) => {
  return (
    <div>
      <img src={user.picture} alt={user.name} />
    </div>
  );
};

export default UserDisplay;
