import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/banner.css'


const Banner = () =>{
   
    
   
    return(
    <div>
           <Carousel showArrows={true} autoPlay={true} interval={4000} infiniteLoop={true} showStatus={false} showThumbs={false} dynamicHeight={false}>
                <div style={{height:"550px"}}>
                    <img  style={{height:"550px"}} src="https://wallpaperaccess.com/full/1808239.jpg" alt="" />
                    <p className='legend'>Welcome to Arez felez</p>
                </div>
                <div  style={{height:"550px"}}>
                    <img style={{height:"550px"}} src="https://garsin.co.za/wp-content/uploads/2020/09/header-slider-top-BG-welded.jpg" alt="" />
                    <p className='legend'>Get your steel piipes from us</p>
                </div>
                <div style={{height:"550px"}}>
                    <img style={{height:"550px"}} src="https://pambansangbakal.com.ph/wp-content/uploads/2014/11/angle-bars.jpg" alt="" />
                    <p className='legend'>We can convert steel sheets into any shape you want using state of the art CNC technology</p>
                </div>
                <div style={{height:"550px"}}>
                    <img style={{height:"550px"}} src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2023/02/Wrought-Iron_Fence_Cost-1352660868.jpg" alt="" />
                    <p className='legend'>Give us a shape and grt it under a week</p>
                </div>
            </Carousel> 
    </div>
    )
}

export default Banner;