import { BACKGROUNDCOLOR } from "../Helpers/colors";

const Footer = () =>{
    return(
        <div className="my-4 p-4" style={{backgroundColor:BACKGROUNDCOLOR}}>
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-4 ">
                        <img style={{width:"200px" , height: "200px" , opacity:"75%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Media_Viewer_Icon_-_Location.svg/1200px-Media_Viewer_Icon_-_Location.svg.png" alt="" /> 
                        <h5>Address:No. 36 , 14th eastern block , Ahan makan , Tehran , Iran</h5>
                    </div>
                    <div className="col-md-4">
                        <img style={{width:"200px" , height: "200px" , opacity:"75%"}} src="https://www.shareicon.net/download/2016/12/29/866467_comment.svg" alt="" /> 
                        <h5>Quik description:</h5>
                        <p>Arez felez co. limited has been around over 100 years and still power's through like never before and it owes this level of power to the Arez felez family beause without them we coudn't have reched where we are..</p>
                    </div>
                    <div className="col-md-4">
                        <img style={{width:"200px" , height: "200px" , opacity:"75%"}} src="https://svgsilh.com/svg/304080.svg" alt="" />
                        <h5>Contact me personally</h5>
                        <p><i className="fa fa-phone"></i>Phone: 09122713600</p>
                        <p><i className="fa fa-address-book"></i>Tel: 021-5722</p>
                        <p><i className="fa fa-fax"></i>Fax: 11223344</p>
                        <div style={{direction:"rtl"}}>
                            <button id="footer-section" className="btn mx-1"><i className="fa fa-whatsapp" style={{color:"#25D366" , fontSize:"2.5em"}}></i></button>
                            <button className="btn mx-1"><i className="fa fa-instagram" style={{color:"#d62976" , fontSize:"2.5em"}}></i></button>
                            <button className="btn mx-1"><i className="fa fa-telegram" style={{color:"#0088cc" , fontSize:"2.5em"}}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;