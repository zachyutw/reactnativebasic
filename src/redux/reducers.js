import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _template from './reducers/_template';
import routes from './reducers/routes';
export default combineReducers({
    formReducer,
    _template,
    routes
})