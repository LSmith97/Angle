const UserDisplay = ({ user }) => {
  return (
    <div className="user-display ml-auto">
      <img
        className="ml-16 h-10 w-10 rounded-full"
        src={user.picture}
        alt={user.name}
      />
    </div>
  );
};

export default UserDisplay;
