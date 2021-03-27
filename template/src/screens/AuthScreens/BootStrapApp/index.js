import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {checkIfLoggedIn} from './actions';

const BootStrapApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIfLoggedIn());
  }, [dispatch]);

  return null;
};

export default BootStrapApp;
