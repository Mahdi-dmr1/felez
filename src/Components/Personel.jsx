import { BACKGROUNDCOLOR } from "../Helpers/colors";

const Personel = () =>{
    return(
        <>
            <div className="p-4" style={{backgroundColor:BACKGROUNDCOLOR}}>
                <div className="container">
                    <div className="row w-100">
                        <div className="col d-flex justify-content-center">
                            <div className="card" style={{backgroundColor:"white"}}>
                                <div className="row w-100">
                                    <div className="col-md-6">
                                        <img className="img-fluid rounded" src="https://www.industria-jobs.co.uk/upload/pages/29_1472374360.jpg" alt="" />
                                    </div>
                                    <div className="col-md-6 text-center py-4" >
                                        <h3 className="card-title"  >Our Personnel</h3>
                                        <p className="card-description">In our company we have the most devoted and self improving employees whom are always looking for ways to improve our company!!Taht's right our company!Because we give them bouneces and commissions based on their productivity and customers they invite.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personel;