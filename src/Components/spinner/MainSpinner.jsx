import {RotatingTriangles} from 'react-loader-spinner';

const MainSpinner = () =>{
    return(
        <center><RotatingTriangles
            visible={true}
             height="80"
             width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
        /></center>
    )
}

export default MainSpinner;