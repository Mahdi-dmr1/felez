import { Link, Outlet , useParams } from "react-router-dom";
import { BACKGROUNDCOLOR } from "../Helpers/colors";


const Products = ({products}) =>{


    


    return(


                        <div className="col-md-4 my-4 d-flex justify-content-around">
                            <div className="card" style={{width:"300px"}}>
                                <img className="card-img-top" src={products.photo}alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{products.name}</h4>
                                    <p className="card-text">{products.fullDes}</p>
                                    <Link to={`/main/${products.id}`}  className="btn btn-outline-warning">Get more info</Link>
                                </div>
                            </div>
                        </div>
            
    )
}

export default Products;