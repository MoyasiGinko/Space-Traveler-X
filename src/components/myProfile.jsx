import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDragons, cancelReservation } from '../redux/features/Dragons/dragonsSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { dragons, status } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  const handleCancelReservation = (dragonId) => {
    localStorage.removeItem(`reserved_${dragonId}`);
    dispatch(cancelReservation(dragonId));
  };

  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <div>
      <h1>My Profile</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default MyProfile;
