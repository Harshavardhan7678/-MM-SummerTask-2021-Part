import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label style={{color:"white"}}>Username</label>
          <input type="text" placeholder="Update your username..." name="name" style={{background: "none"}}/>
          <label style={{color:"white"}}>Email</label>
          <input type="email" placeholder="Update your Email..." name="email" style={{background: "none"}}/>
          <label style={{color:"white"}}>Password</label>
          <input type="password" placeholder="Update your password..." name="password" style={{background: "none"}} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}