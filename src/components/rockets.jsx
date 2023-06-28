import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { fetchRockets } from '../redux/features/Rockets/rocketSlice'
import { bookRocket, canecelReservation } from '../redux/features/Rockets/rocketSlice'

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  },[dispatch])

  if (status === 'Loading') {
    return <div className="loading">Loading ...</div>
  }

  if(status === "failed") {
    return <div className='error'>{error}</div>
  }
  return (
    <div className='rockets'>
      {rockets.map((rocket) => (
          <div className='rocket' key={rocket.id} data-id={rocket.id}>
            <img src={rocket.photo} alt={rocket.name} className='rocketImage' />
            <div className='data'>
              <h2 className='name'>{rocket.name}</h2>              
              <p className='description'>
                {rocket.reserved ? (<div className='reserved'>Reserved</div>) : (<></>) }
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button type='button' className='reserve' onClick={() => dispatch(canecelReservation(rocket.id))}>Cancel Reservation</button>
                ) : (
                  <button type='button' className='reserve' onClick={() => dispatch(bookRocket(rocket.id))}>Reserve Rocket</button>
              )}
              
            </div>
          </div>
      ))}
      
    </div>
  )
}

export default Rockets;
