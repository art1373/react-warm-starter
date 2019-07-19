import { FAIL_LOGIN_DATA, REVERT_FAIL_ACTION } from '~/redux/actions';

const loginError = (state = {}, { type, error }) => {
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
    default:
      return state;
  }
};

export default loginError;
