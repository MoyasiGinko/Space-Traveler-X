import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  const joinedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div id='myprofile'>
      <div id='myprofile-missions'>
        <h2>My Missions</h2>
        <table>
          <tbody>
            {joinedMissions.map(mission => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id='myprofile-rockets'>
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {reservedRockets.map(rocket => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
