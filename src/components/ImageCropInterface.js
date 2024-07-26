import React, { useState, useRef } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop,
} from "react-image-crop";
import setCanvasPreview from "../setCanvasPreview";

const ImageCropInterface = ({ cropImage, setAvatarImg }) => {
  const [crop, setCrop] = useState();

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const ASPECT_RATIO = 1;
  const MIN_DIMENSION = 150;

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: 40,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
      <div className="modal fade" id="imageCropModal" tabIndex="-1">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-body px-4">
              <h1 className="modal-title fs-4 text-center mb-3">
                Crop your picture
              </h1>
              <div className="text-center">
                <ReactCrop
                  crop={crop}
                  circularCrop
                  keepSelection
                  aspect={ASPECT_RATIO}
                  minWidth={MIN_DIMENSION}
                  onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                >
                  <img
                    ref={imgRef}
                    src={cropImage.data_url}
                    alt=""
                    style={{ maxHeight: "70vh" }}
                    onLoad={onImageLoad}
                  />
                </ReactCrop>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-light px-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary px-3"
                  onClick={() => {
                    setCanvasPreview(
                      imgRef.current,
                      previewCanvasRef.current,
                      convertToPixelCrop(
                        crop,
                        imgRef.current.width,
                        imgRef.current.height
                      )
                    );
                    const dataUrl = previewCanvasRef.current.toDataURL();
                    setAvatarImg(dataUrl);
                  }}
                  data-bs-dismiss="modal"
                >
                  Confirm
                </button>
              </div>
            </div>
            {crop && (
              <canvas
                ref={previewCanvasRef}
                className="mt-4"
                style={{
                  display: "none",
                  border: "1px solid black",
                  objectFit: "contain",
                  width: 150,
                  height: 150,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCropInterface;
