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
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {missions && missions.map((mission) => (
            <tr key={mission.mission_id} id='card'>
              <td id='mission-name'>{mission.mission_name}</td>
              <td id='mission-description'>{mission.description}</td>
              <td id='mission-status'>
                {mission.reserved ? (
                  <span className='active-member'>ACTIVE MEMBER</span>
                ) : (
                  <span className='not-a-member'>NOT A MEMBER</span>
                )}
              </td>
              <td id='mission-btn-col'>
                {mission.reserved ? (
                  <button
                    onClick={() => {
                      if (mission.reserved) {
                        dispatch(leaveMission(mission.mission_id));
                      } else {
                        dispatch(joinMission(mission.mission_id));
                      }
                    }}
                    className='join-mission-btn'
                  >
                    Leave Mission
                  </button>
                )
                  : (
                    <button
                      onClick={() => {
                        if (mission.reserved) {
                          dispatch(leaveMission(mission.mission_id));
                        } else {
                          dispatch(joinMission(mission.mission_id));
                        }
                      }}
                      className='leave-mission-btn'
                    >
                      Join Mission
                    </button>
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
