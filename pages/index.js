import { EmptyState, Page } from "@shopify/polaris";
import React, {useState, useEffect} from 'react'
import {ResourcePicker } from "@shopify/app-bridge-react"
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";
import ProductEmptyState from "../components/ProductEmptyState";
import store from 'store-js';

function index({ shopOrigin }){
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [procutsId, setProductsId] = useState([]);
  useEffect(()=>{
    const procductList = store.get(`${shopOrigin}-products`)
    if(procductList){
      setProducts(procductList)
    }
  },[]);

  useEffect(()=>{
      const ids = products.map(product => {
        return {
          id: product.id
        }
      });
      setProductsId(ids);
  },[products])

  function handleProuctSelection(payload){
    setIsOpen(false);
    setProducts(payload.selection);
    store.set(`${shopOrigin}-products`,payload.selection);
  }
  return(
    <>
      <ResourcePicker 
            resourceType="Product" 
            open={isOpen} 
            onCancel={()=>setIsOpen(false)}
            onSelection={handleProuctSelection}  
            initialSelectionIds={procutsId}
          />
      <ProductList products={products} />

    {products.length>0 ? (
        <ProductPage setIsOpen={setIsOpen} products={products} />
    ):(
      <ProductEmptyState setIsOpen={setIsOpen} />
    )};
  </>
)
}

export default index;