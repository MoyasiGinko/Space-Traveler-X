import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDragons,
  reserveDragon,
  cancelReservation,
} from '../redux/features/Dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleReserveDragon = (dragonId) => {
    dispatch(reserveDragon(dragonId));
  };

  const handleCancelReservation = (dragonId) => {
    dispatch(cancelReservation(dragonId));
  };

  return (
    <div>
      <h1>SpaceX Dragons</h1>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <h4>{dragon.name}</h4>
          <p>{dragon.type}</p>
          <p>ID: {dragon.id}</p>
          <img
            className="dragon_img"
            src={dragon.flickr_images[1]}
            alt={dragon.name}
          />
          {dragon.reserved ? (
            <>
              <span>Reserved</span>
              <button onClick={() => handleCancelReservation(dragon.id)}>
                Cancel Reservation
              </button>
            </>
          ) : (
            <button onClick={() => handleReserveDragon(dragon.id)}>
              Reserve Dragon
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dragons;
