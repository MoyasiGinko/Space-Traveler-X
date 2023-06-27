import { useSelector} from 'react-redux'

const Rockets = () => {
  const { test } = useSelector((state) => state.rockets)
  return (
    <div>
    <h1>{test}</h1>
    </div>
  )
}

export default Rockets;
