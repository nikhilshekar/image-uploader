import React from "react";
import background from "../assets/images/background.jpg";
import ImageUploadInterface from "./ImageUploadInterface";
import Profile from "./Profile";
import ImageCropInterface from "./ImageCropInterface";


const Home = () => {
  const [images, setImages] = React.useState();
  const [avatarImg, setAvatarImg] = React.useState();
  const [cropImage, setCropImage] = React.useState("");

  

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="container rounded mt-sm-1 mt-xs-5 mt-xl-5 mt-5">
          <img
            className="backgroundImage h-20"
            src={background}
            alt="background"
          />
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-light update-btn m-3 me-lg-5"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              Update picture
            </button>
          </div>
          <div className="name fs-4 fw-bolder ms-4 ms-md-4 ms-lg-4 ps-xl-3">
            Jack Smith
          </div>
          <ul className="d-flex p-2 px-5 justify-content-between  flex-wrap mt-2">
            <li>@kingjack</li>
            <li>Senior Product Designer at Webflow</li>
            <li>He/Him </li>
          </ul>
          <Profile images={images} avatarImg={avatarImg} />
        </div>
      </div>

      <ImageUploadInterface images={images} setImages={setImages} setCropImage={setCropImage} />
      <ImageCropInterface cropImage={cropImage} setAvatarImg={setAvatarImg} />
    </>
  );
};

export default Home;
