import React from 'react';
import Router from './routerDom/routers';
import useStyles from './stylesheet';
import Header from './components/header';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header/>
      <Router/>
    </div>
  )
}
export default App;
