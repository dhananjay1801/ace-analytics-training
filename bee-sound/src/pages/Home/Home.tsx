import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Home/Hero/Hero'
import BestSelling from '../../components/Home/BestSelling/BestSelling'
import QuickBuy from '../../components/Home/QuickBuy/QuickBuy'
import type { Product } from '../../types/product'
import { getProducts } from '../../api/getProducts'
import { useState, useEffect } from 'react'
import Discount from '../../components/Home/Discount/Discount'
import NewArrivals from '../../components/Home/NewArrivals/NewArrivals'
import Footer from '../../components/Footer/Footer'

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
        <Navbar products={products}/>
        <Hero/>
        <BestSelling products={products.slice(0, 6).map(product => ({
          ...product,
          discountPercentage: 0,
        }))}/>
        <QuickBuy/>
        <Discount products={products.slice(6, 11)}/>
        <NewArrivals products={products.slice(11, 17).map(product => ({
          ...product,
          discountPercentage: 0,
        }))}/>
        <Footer/>
    </div>
  )
}

export default Home