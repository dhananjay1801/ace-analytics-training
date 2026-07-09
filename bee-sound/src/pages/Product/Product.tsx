import Footer from '../../components/Footer/Footer'
import ProductView from '../../components/Product/ProductView/ProductView'
import Navbar from '../../components/Navbar/Navbar'
import RelatedProducts from '../../components/Product/RelatedProducts/RelatedProducts'
import { useEffect, useState } from 'react'
import { getProducts } from '../../api/getProducts'
import type { Product } from '../../types/product'


const Product = () => {

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getProducts();
        setRelated(data.products);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchProducts()
  },[]);

  useEffect(() => {
    if (activeProduct) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeProduct]);

  return (
    <>
      <Navbar products={related}/>
      {activeProduct && 
        <ProductView product={activeProduct} setActiveProduct={setActiveProduct}/>
      }
      <RelatedProducts products = {related.map(product => ({
        ...product,
        discountPercentage: 0,
      }))} 
      onSelect={setActiveProduct}
      />
      <Footer/>
    </>
  )
}

export default Product