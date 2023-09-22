import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { toastifyReducer } from './toastify/reducers';

const rootReducer = combineReducers({
  toastifyStore: toastifyReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
