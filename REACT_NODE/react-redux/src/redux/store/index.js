import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//import reducer
import appReducer from '../reducers';

const rootReducer = (state, action) => {
    state = undefined

    return appReducer(state, action)
}

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        logger
    ),
  )

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer,
    )
}