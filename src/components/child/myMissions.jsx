import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div id="myprofile-missions">
      <h2>My Missions</h2>
      <table>
        <tbody>
          {joinedMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyMissions;
