import { Thumbnail } from '@shopify/polaris'
import React from 'react'
import {RecentSearchesMajor} from '@shopify/polaris-icons';
function ProductItem({product}) {
    const image = product.images[0] ?  product.images[0].originalSrc: RecentSearchesMajor;
    return (
        <>  
            <Thumbnail source={image} />
            {product.title}
        </>
    )
}

export default ProductItem
