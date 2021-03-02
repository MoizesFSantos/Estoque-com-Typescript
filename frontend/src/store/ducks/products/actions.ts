import {action} from 'typesafe-actions';
import {ProductsTypes, Product} from './type';

export const laodRequest = () => action (ProductsTypes.LOAD_REQUEST);

export const laodSuccess = (data: Product[]) => action (ProductsTypes.LOAD_SUCCESS, data);

export const laodFailure = () => action (ProductsTypes.LOAD_FAILURE);