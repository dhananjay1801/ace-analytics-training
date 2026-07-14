import styles from './ProductCard.module.css'

export interface ProductProp{
    title: string;
    price: number;
    image: string;
}

const ProductCard = (prop : ProductProp) => {
    const {title, price, image} = prop;

    
  return (
    <div className={styles.product}>
        <img src={image} />
        <h5>{title}</h5>
        <span>$ {price}</span>
    </div>
  )
}

export default ProductCard