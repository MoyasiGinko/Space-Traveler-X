import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joinMission, leaveMission } from '../redux/features/Missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  

  return (
    <div id='missions'>
      {missions && missions.map((mission) => (
        <div key={mission.mission_id} id='card'>
          <h2>{mission.mission_name}</h2>
          {mission.reserved ? (
            <span className='active-member'>ACTIVE MEMBER</span>
          ) : (
            <span className='not-a-member'>NOT A MEMBER</span>
          )}
          <p>{mission.description}</p>
          <button
            onClick={() => {
              if (mission.reserved) {
                dispatch(leaveMission(mission.mission_id));
              } else {
                dispatch(joinMission(mission.mission_id));
              }
            }}
            className='mission-btn'
          >
            {mission.reserved ? "Leave Mission" : "Join Mission"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Missions;
