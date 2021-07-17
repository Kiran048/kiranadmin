import "./user.css";
import {PermIdentity,CalendarToday,PhoneAndroid,MailOutline,LocationSearching,Publish} from "@material-ui/icons";
import {Link} from "react-router-dom"


export default function User() {
    return (
        <div className="user">
           <div className="userTitleContainer">
           <h1 className="userTitle">Edit User</h1>
           <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
           </div>
           <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM4fHxpbWRpYSUyMG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Begari Prashath</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Accont Details</span>
                            <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">prashanth12</span>
                        </div>
                        
                            <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.10.1996</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+91 8178341880</span>
                        </div>
                            <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">prashanth12@gmail.com</span>
                        </div>
                            <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Telangana | INDIA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="prashanth12" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Begari Prashath" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="prashanth12@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+91 8178341880" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Adress</label>
                                <input type="text" placeholder="Telangana | INDIA" className="userUpdateInput"/>
                            </div>
                            
                        </div>
                        <div className="userUpdateRight">
                           <div className="userUpdateUpload">
                           <img className="userUpdateImg" src="https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM4fHxpbWRpYSUyMG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{ display: "none" }}/>
                           </div>
                           <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}
