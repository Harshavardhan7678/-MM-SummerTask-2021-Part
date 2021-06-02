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
          <label>Username</label>
          <input type="text" placeholder="Harsha" name="name" style={{background: "none"}}/>
          <label>Email</label>
          <input type="email" placeholder="Harsha@gmail.com" name="email" style={{background: "none"}}/>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" style={{background: "none"}} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}