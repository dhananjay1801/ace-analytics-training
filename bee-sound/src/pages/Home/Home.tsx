import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import BestSelling from '../../components/BestSelling/BestSelling'
import QuickBuy from '../../components/QuickBuy/QuickBuy'
import type { Product } from '../../types/product'
import { getProducts } from '../../api/getProducts'
import { useState, useEffect } from 'react'
import Discount from '../../components/Discount/Discount'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(){
            try{
                const data = await getProducts();
                setProducts(data.products);
            }
            catch(err){
                console.error(err);
            }
        }
        loadProducts();
    },[])


  return (
    <div>
        <Navbar/>
        <Hero/>
        <BestSelling products={products.slice(0, 4).map(product => ({
          ...product,
          discountPercentage: 0,
        }))}/>
        <QuickBuy/>
        <Discount products={products.slice(4, 7)}/>
    </div>
  )
}

export default Home