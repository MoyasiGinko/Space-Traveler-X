import MyDragons from './child/myDragons';
import MyRockets from './child/myRockets';
import MyMissions from './child/myMissions';

const MyProfile = () => {
  return (
    <div id="myprofile">
      <MyMissions />
      <MyRockets />
      <MyDragons />
    </div>
  );
};

export default MyProfile;
