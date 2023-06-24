import {Navbar , Main, Product , Footer } from '../src/Components/index/Index';
import {Navigate, Route , Routes} from 'react-router-dom';
import {ToastContainer , toast} from 'react-toastify';

import { mainContext } from './context/mainContext';
import { useEffect, useState , useRef} from 'react';

import { getAllProducts } from './services/productServices';

function App() {

  const [loading , setLoading] = useState(false);
  const [products , setProducts] = useState([]);


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        setLoading(true);

        const {data: productsData} = await getAllProducts();

        setProducts(productsData);
        setLoading(false);

        console.log(productsData);

      }catch(err){
        console.log(err.message);
      }
    }
    fetchData();
  } , [])

  return (
    <>
        <mainContext.Provider
        value={{
          loading,
          products,
        }}>
          <Navbar />
          <ToastContainer />
            <Routes>
              <Route path='/' element={<Navigate to='/main'/>} />
              <Route path='/main' element={<Main />}  />
              <Route path='/main/:productId' element={<Product />} />
            </Routes>
            <Footer />
        </mainContext.Provider>
          
    </>

      

      
  );
}

export default App;
