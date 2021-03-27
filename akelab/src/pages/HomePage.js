import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import { Fibonacci } from '../components/Fibonacci';
import { Akelab } from '../components/Akelab';
import { Film } from '../components/Film';

export const HomePage = () => {
  return (
    <Router>
      <div>
        <Link className='a-to-link' to='/Fibonacci'>
          Fibonacci
        </Link>
        <Link className='a-to-link' to='/Akelab'>
          Akelab
        </Link>
        <Link className='a-to-link' to='/Films'>
          Films
        </Link>
      </div>
      <Switch>
        <Route path='/Fibonacci' component={Fibonacci} />
        <Route path='/Akelab' component={Akelab} />
        <Route path='/Films' component={Film} />

        <Redirect to='/' />
      </Switch>
    </Router>
  );
};
