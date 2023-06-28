import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { dragons } = useSelector((state) => state.dragons);

  const reservedDragons = dragons.filter((dragon) => {
    const reserved = localStorage.getItem(`reserved_${dragon.id}`);
    return reserved === 'true';
  });

  const handleCancelReservation = (dragonId) => {
    localStorage.removeItem(`reserved_${dragonId}`);
  };

  return (
    <div>
      <h1>My Profile</h1>
      {reservedDragons.length > 0 ? (
        <ul>
          {reservedDragons.map((dragon) => (
            <li key={dragon.id}>
              <h4>{dragon.name}</h4>
              <p>{dragon.type}</p>
              <p>ID: {dragon.id}</p>
              <img
                className="dragon_img"
                src={dragon.flickr_images[1]}
                alt={dragon.name}
              />
              <button onClick={() => handleCancelReservation(dragon.id)}>
                Cancel Reservation
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No dragons reserved.</p>
      )}
    </div>
  );
};

export default MyProfile;
