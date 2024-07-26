import React from "react";
import { IoCropSharp } from "react-icons/io5";
import { RiDeleteBin3Line } from "react-icons/ri";

const ImageCard = ({ image, index, onImageRemove, setCropImage }) => {

  return (
    <>
      <div className="d-flex my-2 justify-content-between">
        <div className="d-flex">
          <div>
            <img
              className="rounded"
              src={image.data_url}
              alt=""
              width={"110px"}
              height={"110px"}
            />
          </div>
          <div className="px-3 d-flex flex-column justify-content-between">
            <div className="d-flex flex-column">
              <span className="text-break image-name fw-bold">
                {image.file.name}
              </span>
              <span className="d-block fs-6 fw-medium text-body-secondary">
                {(image.file.size / 1000000).toFixed(1)}MB
              </span>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-light text-body-secondary fw-medium  me-2"
                data-bs-toggle="modal"
                data-bs-target="#imageCropModal"
                onClick={() => setCropImage(image)}
              >
                <IoCropSharp /> <span className="fs-6 ">Crop image</span>
              </button>
              <button
                type="button"
                className="btn btn-light text-body-secondary fw-medium"
                onClick={() => onImageRemove(index)}
              >
                <RiDeleteBin3Line />{" "}
                <span className="fs-6 text-body-secondary">Delete</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <input
            className="form-check-input radio-buttons"
            type="radio"
            name="radio-btns"
            value={index}
          />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
