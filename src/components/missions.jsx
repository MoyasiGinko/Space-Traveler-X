import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joinMission, leaveMission } from '../redux/features/Missions/missionsSlice';

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

  return (
    <div>
      {missions && missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          {mission.reserved ? (
            <span>Active Member</span>
          ) : (
            <span>NOT A MEMBER</span>
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
          >
            {mission.reserved ? "Leave Mission" : "Join Mission"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Missions;
