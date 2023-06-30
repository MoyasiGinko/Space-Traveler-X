import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchRockets } from "../../redux/features/Rockets/rocketSlice";

const MyRockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets())
  }, [dispatch])
    const { rockets} = useSelector((state) => state.rockets);
    const reservedRockets = rockets.filter((rocket) => rocket.reserved);
    console.log(reservedRockets)
  return (
    <div id="myprofile-rockets">
      <h2>My Rockets</h2>
      <table>
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyRockets;
