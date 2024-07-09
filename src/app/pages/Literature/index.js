import React from 'react';
import useStyles from './stylesheet';

const Literature = () => {
  const classes = useStyles();
  return (
    <div className={classes.literatureContainer}>
      <div className={classes.title}>
        <h3>Edebiyat Kategorisi</h3>
      </div>
        <div className={classes.cardsContainer}>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
          <div className={classes.card}></div>
        </div>
    </div>
  )
}

export default Literature