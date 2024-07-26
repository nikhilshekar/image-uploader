import React from "react";
import noAvatar from "../assets/images/avatar.jpg";

const Profile = ({ images, avatarImg }) => {
  return (
    <div>
      {avatarImg ? (
        <img className="avatar" src={avatarImg} alt="avatar" />
      ) : (
        <img className="avatar" src={noAvatar} alt="avatar" />
      )}
    </div>
  );
};

export default Profile;
