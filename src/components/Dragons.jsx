import { useEffect } from 'react';
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
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const handleReserveDragon = (dragonId) => {
    dispatch(reserveDragon(dragonId));
  };

  const handleCancelReservation = (dragonId) => {
    dispatch(cancelReservation(dragonId));
  };

  const getReservationStatus = (dragonId) => {
    const reserved = localStorage.getItem(`reserved_${dragonId}`);
    return reserved === 'true';
  };

  return (
    <div className="all-dragons">
      {dragons.map((dragon) => (
        <div className="dragon" key={dragon.id}>
          <img
            className="dragonImage"
            src={dragon.flickr_images[1]}
            alt={dragon.name}
          />
          <div className="data">
            <h2 className="name">{dragon.name}</h2>
            <div className="description">
              <p>{dragon.type}</p>
              <p>
                ID:
                {dragon.id}
              </p>
            </div>
            {getReservationStatus(dragon.id) ? (
              <>
                <span className="drag-reserved">Reserved</span>
                <button
                  type="button"
                  className="drag-cancel-btn"
                  onClick={() => handleCancelReservation(dragon.id)}
                >
                  Cancel Reservation
                </button>
              </>
            ) : (
              <button
                type="button"
                className="drag-reserve-btn"
                data-testid="cancel-reservation-button"
                onClick={() => handleReserveDragon(dragon.id)}
              >
                Reserve Dragon
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
