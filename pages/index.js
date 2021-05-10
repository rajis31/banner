import { Page } from "@shopify/polaris";
import React, {useState} from 'react'
import {ResourcePicker } from "@shopify/app-bridge-react"
import ProductList from "../components/ProductList";

function index(){
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])

  function handleProuctSelection(payload){
    setIsOpen(false);
    setProducts(payload.selection);

  }
  return(
    <div>
      <Page
        title="Product Selection"
        primaryAction={{
          content:"Selected Product",
          onAction: ()=> setIsOpen(true),
        }}
      >
        <ResourcePicker 
            resourceType="Product" 
            open={isOpen} 
            onCancel={()=>setIsOpen(false)}
            onSelection={handleProuctSelection}  
          />
          <ProductList products={products} />
      </Page>
    </div>
  )
}

export default index;