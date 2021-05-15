import React from 'react'
import { Page } from "@shopify/polaris";
import ProductList from './ProductList';

export default function ProductPage({setIsOpen,products}) {
    return (
        <Page
        title="Product Selection"
        primaryAction={{
          content:"Selected Product",
          onAction: ()=> setIsOpen(true),
        }}
      >
          <ProductList products={products} />
      </Page> 
    )
}
