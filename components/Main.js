import classes from './Main.module.css';
import Title from './Title';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide';

const Main = () => {
  return (
    <>
      <Title />
      <div className={classes.big}>
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
};

export default Main;
