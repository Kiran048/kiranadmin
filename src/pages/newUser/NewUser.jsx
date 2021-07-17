import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <div className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="kiran"></input>
                </div>
                <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" placeholder="Beagri kiran kumar"></input>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="bkiran048@gamil.com"></input>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"></input>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+91 1234567890"></input>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Telangana | INDIA"></input>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newsUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="emale">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                <label>Gender</label> 
                <select className="newUserSelect" Name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
                <button className="newUserButton">Create</button>
            </div>
        </div>
    )
}
