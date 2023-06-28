import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchRockets } from '../redux/features/Rockets/rocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        </div>
      ))}
    </div>
  )
}

export default Rockets;
