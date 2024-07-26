import React from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import ImageUploading from "react-images-uploading";
import ImageCard from "./ImageCard";

const ImageUploadInterface = ({ images, setImages, setCropImage }) => {
  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <div
            className="modal fade"
            id="modal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="d-flex justify-content-between">
                    <h1 className="modal-title fs-4">Upload image(s)</h1>
                    <button
                      type="button"
                      className="btn-close fs-6"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <p className="text-body-secondary fw-lighter fs-6">
                    You may upload images upto 5 images
                  </p>
                  {errors && (
                    <div className="mt-3">
                      {errors.maxNumber && (
                        <div className="alert alert-danger fs-6" role="alert">
                          You can only select maximum 5 images.
                        </div>
                      )}
                      {errors.acceptType && (
                        <div className="alert alert-danger fs-6" role="alert">
                          The file format is not supported. Please upload an
                          image in one of the formats: JPG or PNG.
                        </div>
                      )}
                      {errors.maxFileSize && (
                        <div className="alert alert-danger fs-6" role="alert">
                          The image is larger than 5MB. Please select smaller
                          image.
                        </div>
                      )}
                    </div>
                  )}
                  <div
                    className="upload-container d-flex flex-column justify-content-center align-items-center"
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <span className="cloud-icon mb-2 px-3">
                      <FaCloudArrowUp className="mb-2" />
                    </span>
                    <span>Click or drag and drop to upload</span>
                    <span className="text-body-secondary fw-lighter fs-6">
                      PNG, or JPG (Max 5mb)
                    </span>
                  </div>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <ImageCard
                        image={image}
                        index={index}
                        onImageRemove={onImageRemove}
                        setCropImage={setCropImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUploadInterface;
