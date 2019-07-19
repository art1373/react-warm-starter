import {
  FAIL_LOGIN_DATA,
  REVERT_FAIL_ACTION,
  SUCCESSFUL_LOGIN,
} from '~/redux/actions';

const loginError = (state = {}, { type, error, profile }) => {
  switch (type) {
    case FAIL_LOGIN_DATA:
      return {
        ...state,
        error: true,
        errorMessage: error,
      };
    case REVERT_FAIL_ACTION:
      return {
        ...state,
        error: undefined,
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        error: undefined,
        errorMessage: undefined,
        profile,
        userIsLogin: true,
      };
    default:
      return state;
  }
};

export default loginError;
