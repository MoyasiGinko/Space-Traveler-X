import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchRockets } from '../redux/features/Rockets/rocketSlice';

const Rockets = () => {
  const { test } = useSelector((state) => state.rockets)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}

export default Rockets;
