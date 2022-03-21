import { ActionTypes } from "../constants/action-types";
import axios from 'axios'
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchtProducts = ()=>async (dispatch)=>{
       const response = await fakeStoreApi.get('/products');
       dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
   
}

export const fetchtProduct = (id)=>async (dispatch)=>{
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload:response.data})

}

export const setProducts = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (products)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const removeSelectedProduct = ()=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}