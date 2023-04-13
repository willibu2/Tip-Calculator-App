import classes from './LeftSide.module.css';
import Image from 'next/image';
import TipContext from '@/store/TipContext';
import { useContext } from 'react';

import TipPercent from './TipPercent';

const LeftSide = () => {
  const ctx = useContext(TipContext);

  const billClasses = ctx.billIsInvalid ? `${classes.error}` : '';

  const customClasses = ctx.customIsInvalid
    ? `${classes['tip-input']} ${classes.error}`
    : `${classes['tip-input']}`;

  return (
    <form className={classes.main}>
      <label htmlFor="bill">Bill</label>
      <input
        maxLength={6}
        className={billClasses}
        id="bill"
        placeholder="0"
        onChange={ctx.billChangeHandler}
        onBlur={ctx.billBlurHandler}
        value={ctx.billValue}
      />
      <Image
        src="/images/icon-dollar.svg"
        width="15"
        height="20"
        className={classes.logo}
        alt="dollar sign"
      />

      <p className={classes.p}>Select Tip %</p>
      <div className={classes['box-container']}>
        <TipPercent id={5}>5%</TipPercent>
        <TipPercent id={10}>10%</TipPercent>
        <TipPercent id={15}>15%</TipPercent>
        <TipPercent id={25}>25%</TipPercent>
        <TipPercent id={50}>50%</TipPercent>

        <input
          placeholder="Custom"
          className={customClasses}
          onChange={ctx.customChangeHandler}
          onBlur={ctx.customBlurHandler}
          maxLength={2}
          value={ctx.customValue}
        />
      </div>
      <div className={classes['error-container']}>
        <label>Number of People</label>
        {ctx.peopleIsZero && (
          <p className={classes['error-text']}>Can't be zero</p>
        )}
      </div>
      <input
        id="number of people"
        placeholder="0"
        onChange={ctx.peopleChangeHandler}
        onBlur={ctx.peopleBlurHandler}
        maxLength={9}
        value={ctx.peopleValue}
      />
      <Image
        src="/images/icon-person.svg"
        width="15"
        height="20"
        className={classes.logo}
        alt="person logo"
      />
    </form>
  );
};

export default LeftSide;
