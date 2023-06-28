import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joinMission } from '../redux/features/Missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const onJoinMissionClick = (id) => {
    dispatch(joinMission(id));
    const updatedMission = missions.find((mission) => mission.mission_id === id);
    console.log(updatedMission);
  }

  console.log("Missions state: ", missions);
  return (
    <div>
      {missions && missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          <p>{mission.description}</p>
          <button onClick={() => onJoinMissionClick(mission.mission_id)}>Join Mission</button>
        </div>
      ))}
    </div>
  );
};

export default Missions;
