import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchDragons,
  cancelReservation,
} from '../../redux/features/Dragons/dragonsSlice';

const MyDragons = () => {
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
    <div id="myprofile-dragons">
      <h2>My Dragons</h2>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
          {reservedDragons.length > 0 ? (
            <table>
              <tbody>
                {reservedDragons.map((dragon) => (
                  <tr key={dragon.id}>
                    <td>{dragon.name}</td>
                    <button
                      className="drag-cancel-btn"
                      onClick={() => handleCancelReservation(dragon.id)}
                    >
                      Cancel Reservation
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No dragons reserved.</p>
          )}
        </>
      )}
    </div>
  );
};

export default MyDragons;
