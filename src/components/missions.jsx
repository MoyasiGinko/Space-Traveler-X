import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchMissions } from '../redux/features/Missions/missionsSlice';

const Missions = () => {
  const { test } = useSelector((state) => state.missions)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}

export default Missions;
