import classes from './RightSide.module.css';
import { useContext } from 'react';

import TipContext from '@/store/TipContext';

const RightSide = () => {
  const ctx = useContext(TipContext);

  const tipAmount =
    !isNaN(ctx.tipAmount) && isFinite(ctx.tipAmount)
      ? parseFloat(ctx.tipAmount).toFixed(2)
      : '0.00';

  const totalAmount =
    !isNaN(ctx.totalAmount) && isFinite(ctx.totalAmount)
      ? parseFloat(ctx.totalAmount).toFixed(2)
      : '0.00';

  return (
    <div className={classes.main}>
      <div className={classes['small-container']}>
        <div className={classes['smaller-container']}>
          <p className={classes['tip-amount']}>Tip Amount</p>
          <p className={classes.person}>/ person</p>
        </div>
        <p className={classes.number}>{`$${tipAmount}`}</p>
      </div>
      <div className={classes['small-container']}>
        <div className={classes['smaller-container']}>
          <p className={classes['tip-amount']}>Total</p>
          <p className={classes.person}>/ person</p>
        </div>
        <p className={classes.number}>{`$${totalAmount}`}</p>
      </div>

      <button className={classes.btn} onClick={ctx.reset}>
        RESET
      </button>
    </div>
  );
};

export default RightSide;
