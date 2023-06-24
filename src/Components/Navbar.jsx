import { Link } from "react-router-dom";
import '../style/navbar.css';

const Navbar = () =>{

    const scrollIntoFooter = () =>{
        const section = document.getElementById('footer-section');

        if (section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }

    const scrollIntoAboutUs = () =>{
        const section = document.getElementById('about-us-section');

        if (section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }

    const scrollToTheTop = () =>{
        window.scroll(0,0);
    }

    

    return(
        <>
            <nav className="navbar navbar-expand-md navbar-default-dark sticky-top shadow   bg-white " style={{backgroundColor:"white"}}>
                <div className="container">
                    <div className="navbar-brand col-sm-3">
                        <button className="btn btn-default" onClick={scrollToTheTop}><img style={{width:"60px" , height:"40px"}} src="https://companieslogo.com/img/orig/7203.SR-525de6f0.png?t=1645614470" alt="" />  Arez Cooporation</button>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <Link to='/main' className="btn btn-default nav-item">home</Link>
                        <button onClick={scrollIntoAboutUs} className="btn btn-default nav-item">about us</button>
                        <button onClick={scrollIntoFooter} className="btn btn-default nav-item">contact us</button>
                        <button className="btn btn-default nav-item">call now</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;