import { useSelector } from 'react-redux';

const Missions = () => {
  const { test } = useSelector((state) => state.missions);
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
};

export default Missions;
