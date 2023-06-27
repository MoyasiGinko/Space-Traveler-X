import { useSelector } from 'react-redux'

const Dragons = () => {
    const { test } = useSelector((state) => state.dragons)
  return (
    
    <div>
      <h1>{test}</h1>
    </div>
  )
}

export default Dragons
