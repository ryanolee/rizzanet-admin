import {createStore} from "redux";
import middleware from "./middleware";
import reducers from "./reducers";
import {intialLoad} from "./actions/config";
import {getInitialState} from "./actions/content";

const store = createStore(reducers, middleware);
store.dispatch(intialLoad());
store.dispatch(getInitialState());
window.store = store;

export default store;