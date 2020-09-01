import { createStore, combineReducers} from 'redux';
import { cardsReducer } from '../reducers/cardsReducer';

const reducers = combineReducers({
    card: cardsReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

