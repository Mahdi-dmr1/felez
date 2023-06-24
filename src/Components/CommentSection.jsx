import { toast } from "react-toastify";
import { BACKGROUNDCOLOR } from "../Helpers/colors";

const CommentSection = () =>{


    const sendThoughts = () =>{
        toast.success("Thoughts successfully sent! 🎈")
    }


    return(
        <div style={{backgroundColor:BACKGROUNDCOLOR}}>
            <div className="container">
                <div className="row w-100 p-4">
                    <form onSubmit={sendThoughts} className="mb-4">
                        <div className="form-row w-100">
                            <div className="form-group col-md-6 my-4">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder="Name" className="form-control" />
                            </div>
                            <div className="form-group col-md-6 my-4">
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder="Last name" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group col-md-6 my-4">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="Email Adress" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6 my-4">
                            <label htmlFor="">City</label>
                            <input type="text" placeholder="City" className="form-control"/>
                        </div>
                        <div>
                            <label htmlFor="">What do you think about us?</label>
                            <textarea placeholder="Your thoughts:" className="form-control"></textarea>
                        </div>
                        <div className="mt-4">
                            <button onSubmit={sendThoughts} className="btn btn-success">Submit</button>
                        </div>
                    </form>


                    <div className="my-4">
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CommentSection;