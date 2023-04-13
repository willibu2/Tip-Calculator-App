import classes from './TipPercent.module.css';
import { useContext } from 'react';
import TipContext from '@/store/TipContext';

const TipPercent = (props) => {
  const ctx = useContext(TipContext);

  const divClasses =
    ctx.customValue == props.id
      ? `${classes['tip-percent']} ${classes.active}`
      : `${classes['tip-percent']}`;

  return (
    <div
      className={divClasses}
      id={props.id}
      onClick={ctx.onClickTipPercentHandler}
    >
      {props.children}
    </div>
  );
};

export default TipPercent;
