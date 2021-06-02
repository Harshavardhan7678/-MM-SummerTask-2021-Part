import { IconButton } from "@material-ui/core";
import "./Write.css";
import AddIcon from "@material-ui/icons/Add";

export default function Write() {
  return (
    <div className="upperWrite">
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <IconButton>
                <AddIcon />
              </IconButton>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text" style={{background: "none"}}
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text" style={{background: "none"}}
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
