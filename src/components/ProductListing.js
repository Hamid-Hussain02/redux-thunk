import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import '../App.css'
import axios from 'axios'
import { useEffect } from 'react';
import { fetchtProducts, setProducts } from '../redux/actions/productActions';


const ProductListing =()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch()

    // const fetchProducts = async ()=>{
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     .then(res=>{
    //         console.log(res.data)
    //         dispatch(setProducts(res.data))
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
        // .then(json=>console.log(json)).catch((error)=>{
        //     console.log(error)
        // })
    // }

    useEffect(()=>{
        dispatch(fetchtProducts())
    },[])
    return(
        <div className='ui grid container header-margin'>
            <ProductComponent/>
        </div>
    );
}

export default ProductListing