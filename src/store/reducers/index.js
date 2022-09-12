import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './Posts/posts.reducer';
import usersReducer from './Users/users.reducer';

export default combineReducers({
    form : formReducer,
    posts : postsReducer,
    paginationState : usersReducer
});