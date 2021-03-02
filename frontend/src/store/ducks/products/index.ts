import { Reducer } from 'redux';
import {ProductsState, ProductsTypes} from './type';


const INITIAL_STATE: ProductsState ={
    data: [
        {id:1, produto:'caneta', valor:3 , quantidade: 2},
    ],
    error :false,
    loading: false,
};

const reducer: Reducer <ProductsState> = (state = INITIAL_STATE,action) =>{
switch(action.type){
    case ProductsTypes.LOAD_REQUEST:
        // se for uma requisição copiar o state, loading true
        return{
             ...state, loading: true
            }

    case ProductsTypes.LOAD_SUCCESS:
        // se for um sucesso copiar o state e o loading é false
        // error como falso e atualizar a data 
        return {
            ...state, loading:false, error: false, data: action.payload.data
        }

    case ProductsTypes.LOAD_FAILURE:
        // se for um erro  copiar o state retornar o error como true
        // o loading como false e data como vazio
        return {
            ...state, loading:false, error:true, data:[]
        }

    default:
        return state;
   }
};

export default reducer;
