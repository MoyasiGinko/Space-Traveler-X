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
    <div>
      <h2 className="rockets-title">My Rockets</h2>
      <div className="myRockets">
        {reservedRockets.map((rocket) => (
          <>
          <h2 className="rocketName">{rocket.name}</h2>
          <div className="rocket-devider"></div>
          </>
        ))}
      </div>
    </div>
  )
}

export default MyRockets;
