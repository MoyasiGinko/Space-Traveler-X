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
    <table id='missions'>
      <tr>
        <th id="Mission-header">Mission</th>
        <th id="Description-header">Description</th>
        <th id="Status-header">Status</th>
        <th id="Empty-header"></th>
      </tr>
      {missions && missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td id='mission-name'>{mission.mission_name}</td>
          <td id='mission-description'>{mission.description}</td>
          <td id='mission-status'>
          {mission.reserved ? (
            <span className='active-member'>ACTIVE MEMBER</span>
          ) : (
            <span className='not-a-member'>NOT A MEMBER</span>
          )}
          </td>
          <td id='mission-button'>
          
          {mission.reserved ? (
            <button className='leave' onClick={() => dispatch(leaveMission(mission.mission_id))}>Leave Mission</button>
          ) : (
            <button className='join' onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</button>
          )}
          
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Missions;
