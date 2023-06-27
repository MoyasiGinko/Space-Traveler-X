import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/features/Dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>SpaceX Dragons</h1>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <img className="dragon_img" src={dragon.flickr_images[1]} alt={dragon.name} />
          <h4>{dragon.name}</h4>
          <p>{dragon.description}</p>
          <p>ID: {dragon.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
