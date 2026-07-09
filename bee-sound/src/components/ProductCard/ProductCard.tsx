import { Box } from '@mui/material'
import type { Product } from '../../types/product'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    product: Product;
    size?: "default" | "small";
}

const ProductCard = (prop: ProductCardProps) => {
    const { product, size } = prop;
    return (
        <Box className={size === "small" ? styles.smallCard : ""}>
            <div className={styles.imageContainer}>

                {product.discountPercentage > 0 &&
                    <svg className={styles.discountBadge} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7446 0.532806C21.4598 -0.177652 23.3869 -0.177651 25.1021 0.532806L36.008 5.05017C37.7232 5.76063 39.0859 7.12335 39.7964 8.83855L44.3138 19.7444C45.0242 21.4596 45.0242 23.3868 44.3138 25.102L39.7964 36.0079C39.0859 37.7231 37.7232 39.0858 36.008 39.7963L25.1021 44.3136C23.3869 45.0241 21.4598 45.0241 19.7446 44.3136L8.83867 39.7963C7.12347 39.0858 5.76075 37.7231 5.05029 36.0079L0.532928 25.102C-0.17753 23.3868 -0.177529 21.4596 0.532928 19.7444L5.05029 8.83854C5.76075 7.12335 7.12347 5.76063 8.83867 5.05017L19.7446 0.532806Z" fill="#FF0000" />

                        <text
                        className={styles.discountText}
                            x="50%"
                            y="50%"
                        >
                            {Math.round(product.discountPercentage)}%
                        </text>

                    </svg>
                }

                <img className={styles.imgBg} src={product.thumbnail} alt="" />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </Box>
    )
}

export default ProductCard;