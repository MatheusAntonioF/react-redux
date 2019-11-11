// Combina vários reducers na aplicação
import { combineReducers } from 'redux';

import course from './course';

export default combineReducers({
  course,
});