import { createStore, Store} from 'redux';
import rootReducer from './ducks/rootReducer';
import { ProductsState } from './ducks/products/type';


export interface ApplicationState {
    products: ProductsState
}

const store : Store<ApplicationState> = createStore(rootReducer);

export default store;
