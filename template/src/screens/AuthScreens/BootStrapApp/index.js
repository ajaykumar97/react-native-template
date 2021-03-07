import { useEffect } from 'react';

import { connect } from 'react-redux';
import { checkIfLoggedIn } from './actions';

const BootStrapApp = (props) => {
  useEffect(() => {
    props.checkIfLoggedIn();
  }, []);

  return null;
};

export default connect(null, {
  checkIfLoggedIn
})(BootStrapApp);
