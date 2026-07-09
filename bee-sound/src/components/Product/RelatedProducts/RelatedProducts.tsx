import { Box } from '@mui/material'
import type { Product } from '../../../types/product';
import styles from './RelatedProducts.module.css';
import ProductCard from '../../ProductCard/ProductCard';

interface RelatedProductsProps{
    products: Product[];
    onSelect: (product : Product) => void;
}

const RelatedProducts = (prop: RelatedProductsProps) => {
    const {products, onSelect} = prop;

  return (
    <Box className={styles.box}>
        <div className={styles.title}>Related Products</div>
            
        <div className={styles.relatedItems}>
            {products.map((product) => (
                <div key={product.id} onClick={()=>onSelect(product)}>
                    <ProductCard showAddToCart={false} product={product} size='small'/>
                </div>
            ))}
        </div>
    </Box>
  )
}

export default RelatedProducts