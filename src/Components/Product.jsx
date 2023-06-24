import { useReducer , useEffect, useState, useContext } from "react";
import {toast} from 'react-toastify';
import { mainContext } from "../context/mainContext";
import { BACKGROUNDCOLOR } from "../Helpers/colors";
import { Link, useNavigate , useParams } from "react-router-dom";
import { getProduct } from "../services/productServices";


const reducer = (state , action) =>{
    switch(action.type)
        {
            case 'increment':
                return {count: state.count +  action.payload};
            case 'decrement':
                return{count: state.count - action.payload};
            default:
                return state;
        }
}

const Product = () =>{

    const {productId} = useParams();
    const {setLoading} = useContext(mainContext);

    const [pro , setPro] = useState({
        product: {},
    });


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const { data: productData} = await getProduct(productId);
            setPro({
                ...pro,
                product: productData
            })
            console.log(productData);
            
        }catch(err){
            console.log(err.message);
        }
            
        }
        fetchData();
    },[])


    

    
    const onPlaceOrder = () =>{
         toast.success('order successfully placed!🛒')
    }



        // In order to add or reduce products
        const [state , dispatch] = useReducer(reducer , {count:0})
        const increament = () =>{
            dispatch({type: 'increment' , payload: 1})
        }
        const decrement = () =>{
            state.count > 0 ? 
            dispatch({type: 'decrement' , payload: 1}):
            toast.error('you can not go under 0')
        }
    

        
    
    
    const {product} = pro;

    return(
    <>
    <div style={{backgroundColor:BACKGROUNDCOLOR}}>
            <div className="banner mb-4">
                <img style={{margin:"0" , width:"100%" , height:"400px" , objectFit:"cover"}} src={product.productBanner} alt="" />
            </div>
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-6 my-4 p-4">
                        <img className="img-fluid rounded " style={{width:"300px" , height:"300px"}} src={product.photo} alt="" />
                    </div>
                    <div className="col-md-6 text-center p-4 mt-4">
                        <h4 className="my-4">{product.name}</h4>
                        <center><hr style={{width:"30%" , color:"orange" , border: "1.5px solid"}} /></center>
                        <p>{product.process}</p>
                        <Link to='/main' className="btn btn-outline-warning mt-4 mx-4">Click to go back</Link>
                    </div>
                    <div className="mt-4 col-md-12 text-center">
                        <button onClick={decrement} className="btn btn-default "style={{ color:"red" , fontSize:"2em" }}>-</button>
                        <p style={{fontSize:"1.3em" , color:"black" , backgroundColor:BACKGROUNDCOLOR}} className="badge rounded-pill ">{state.count}</p>
                        <button onClick={increament} className="btn btn-default text-center"style={{ color:"green" , fontSize:"2em" }}>+</button>
                        </div>
                        <div className="mt-1 mb-4 text-center">
                            <button id="placeOrederBtn" className="btn btn-success" onClick={onPlaceOrder}>Place Order</button>
                        </div>
                </div>
            </div>
        </div>
        <center><hr className="my-4" style={{width:"80%" , color:"orange" , border: "1.2px solid"}} /></center>

    </>
        
        
    )
}
 
export default Product;