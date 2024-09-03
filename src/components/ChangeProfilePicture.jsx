import React from "react";

function ChangeProfilePicture() {
  const handleChangeProfilePicture = () => {
    alert("Implement logic to change profile picture."); // Placeholder message
  };

  return (
    // <button className="change-profile-btn" onClick={handleChangeProfilePicture}>
    //   Change Profile
    // </button>
    <div className="profile-picture">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/017e85dd21cd6764f2f4994df5fc178e38bb0038207282b7c72a3f8f1e452c61?apiKey=25b957d3db53419f881a9efe72b830ae&"
            alt="Profile"
          />
          <button type="button" className="change-profile-btn">Add Profile</button>
        </div>
  );
}

export default ChangeProfilePicture;
