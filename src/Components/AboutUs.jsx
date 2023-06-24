import { BACKGROUNDCOLOR } from "../Helpers/colors";
import '../style/style.css';


const AboutUs = () =>{
    return(
        <>
        <div >
            <div className="my-4 py-4 " style={{backgroundColor:BACKGROUNDCOLOR , width:"70%" , borderBottomRightRadius:"20px" , borderTopRightRadius:"20px" }}>
                <div className="container">
                    <div className="card" style={{backgroundColor:BACKGROUNDCOLOR , border:"none"}}>
                        <div className="row w-100">
                            <div className="col-md-6 my-4 p-4">
                                <h3>Where did we start</h3>
                                <p>We started as a small family in 1965 where we only used to collect parts of metals which where unusable and we grew from two(me and my brother),to a 1000 employee big family and we're stronger by each day and also we still may have some place in our home for you as a family member or an invester.</p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid rounded" src="https://s7d1.scene7.com/is/image/CENODS/09922-cover-opener?$responsive$&wid=1400&qlt=90,0&resMode=sharp2" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="rtl" className="my-4 py-4 " style={{backgroundColor:BACKGROUNDCOLOR , width:"70%" , borderBottomLeftRadius:"20px" , borderTopLeftRadius:"20px" , float:"right" , display:"block" }}>
                <div className="container">
                    <div className="card" style={{backgroundColor:BACKGROUNDCOLOR , border:"none"}}>
                        <div className="row w-100">
                            <div className="col-md-6 my-4 p-4">
                                <h3>Where did we start</h3>
                                <p>We started as a small family in 1965 where we only used to collect parts of metals which where unusable and we grew from two(me and my brother),to a 1000 employee big family and we're stronger by each day and also we still may have some place in our home for you as a family member or an invester.</p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid rounded" src="https://s7d1.scene7.com/is/image/CENODS/09922-cover-opener?$responsive$&wid=1400&qlt=90,0&resMode=sharp2" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs;