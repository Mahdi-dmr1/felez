import { useContext , useEffect } from "react";
import { BACKGROUNDCOLOR } from "../Helpers/colors";
import {mainContext} from "../context/mainContext";
import {Banner , PriceTable , Personel , AboutUs , Footer, Products , MainSpinner , CommentSection} from './index/Index';
import '../style/style.css';
import { Link } from "react-router-dom";

const Main = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const {products , loading , inputFocus} = useContext(mainContext);


    return(
        <>
            <Banner />

            <div className="container  mt-4 mb-4">
                <div className="row w-100">
                    <div className="col d-flex justify-content-center">
                        <Link to="https://wa.me/989122713600" className="btn btn-default" ><i className="fa fa-whatsapp mx-3" style={{color:"#25D366" , fontSize:"4.4em"}}></i></Link>
                        <Link className="btn btn-default"><i className="fa fa-telegram mx-3" style={{color:"#0088cc" , fontSize:"4.4em"}}></i></Link>
                        <Link to="https://linkedin.com/in/mohammad-damirchi-580124162" className="btn btn-default"><i className="fa fa-linkedin mx-3"style={{color:"#0072b1 " , fontSize:"4.4em"}}></i></Link>
                    </div>
                </div>
            </div>

            <div className="p-4" style={{backgroundColor:BACKGROUNDCOLOR  }}>
                <h1 className="text-center">Product Description</h1>
                    <div className="container p-4">
                        <div className="row w-100">
                {loading ? 
                    (<MainSpinner />):
                    products.map((p)=> <Products key={p.id} products={p} />)
                }
                        </div>
                    </div>
            </div>


            <img id="middle-img"  style={{width:"100%" , height:"500px" }} src="https://images.hdqwalls.com/wallpapers/industry-revolution-digital-art-8s.jpg" alt="" />

            <PriceTable />

            <center>
                <h5 className="my-4">You are the one who can make a change</h5>
                <hr style={{width:"60%" , color:"orange" , border: "1.5px solid"}} />
            </center>

            
            <Personel />


            <center className="my-4">
                <h5 id="about-us-section">Every one is born without knowledge but some work harder to acuire</h5>
                <hr style={{width:"60%" , color:"orange" , border: "1.5px solid"}} />
            </center>

            <AboutUs />
            <center className="my-4">
                <hr style={{width:"60%" , color:"orange" , border: "1.5px solid"}} />
            </center>

            
            <CommentSection />


        </>
        
    )
}

export default Main;